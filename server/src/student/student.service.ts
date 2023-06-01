/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Equal, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Vote } from 'src/vote/entities/vote.entity';
import { Option } from 'src/option/entities/option.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly StudentRepository: Repository<Student>,
    @InjectRepository(Vote)
    private readonly VoteRepositery: Repository<Vote>,
    @InjectRepository(Option)
    private readonly OptionRepositery: Repository<Option>,
  ) { }
  async create(createStudentDto: CreateStudentDto) {
    await this.StudentRepository.save(createStudentDto);

    return 'student add succefully';
  }

  async findAll() {

    return await this.StudentRepository.find();
  }

  async findOne(id: string) {
    return await this.StudentRepository.findOne({
      where: {
        id: Equal(id),
      },
    });
  }


  update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.StudentRepository.update(id, updateStudentDto);
  }

  remove(id: string) {
    return this.StudentRepository.delete(id);
  }
  findByIdentifier(identifier:number){
    return this.StudentRepository.findOne({ where: { cardID :identifier}})
  }
  async Vote(studentId: string, voteId: string, optionId: string): Promise<void> {
    const student = await this.StudentRepository.findOne({where:{id:Equal(studentId)}});

    if (!student) {
      throw new NotFoundException('Student not found');
    }

    const vote = await this.VoteRepositery.findOne({where:{id:Equal(voteId)}});

    if (!vote) {
      throw new NotFoundException('Vote not found');
    }

    const option = await this.OptionRepositery.findOne({where:{id:Equal(optionId)}});

    if (!option || option.vote.id !== voteId) {
      throw new NotFoundException('Option not found');
    }
  }
}
