import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Equal, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly StudentRepository: Repository<Student>,
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
}
