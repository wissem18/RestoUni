/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Equal, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Option } from 'src/option/entities/option.entity';
import {VoteStudent} from "../vote-student/entities/vote-student.entity";
import { Vote } from 'src/vote/entities/vote.entity';
import {Restaurant} from "../restaurant/entities/restaurant.entity";


@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly StudentRepository: Repository<Student>,
    @InjectRepository(Vote)
    private readonly VoteRepositery: Repository<Vote>,
    @InjectRepository(VoteStudent)
    private readonly VoteStudentRepositery: Repository<VoteStudent>,
    @InjectRepository(Option)
    private readonly OptionRepositery: Repository<Option>,
    @InjectRepository(Restaurant)
    private readonly RestaurantRepository: Repository<Restaurant>,
  ) {}
  async create(restaurantId: string ,  createStudentDto: CreateStudentDto) {
    const restaurant = await this.RestaurantRepository.findOne({where : {id  : Equal(restaurantId)}});
    if(!restaurant) {
      throw new NotFoundException("Restaurant not found");
    }
    const student = this.StudentRepository.create(createStudentDto);
    student.restaurant = restaurant;
    return this.StudentRepository.save(student);
  }



  async findAll(RestaurantId: string) {
    const restaurant = await this.RestaurantRepository.findOne({where : {id  : Equal(RestaurantId)}});
    if(!restaurant) {
      throw new NotFoundException("Restaurant not found");
    }
    return this.StudentRepository.find({
      where : {restaurant : {id : RestaurantId}},
      relations : {
        voteStudents:true
      }
    },
    );
  }

  async findOne(id: string) {
    return await this.StudentRepository.findOne({
          where : {id : id }  
        }).then(Student => {
            if(!Student){
                throw new NotFoundException("Student not found");
            }
            return Student;
        }
    );
  }


   async  update(id: string, updateStudentDto: UpdateStudentDto) {

      const student = await this.findOne(id);
    if(!student) {
      throw new NotFoundException("Student not found");
    }
    return this.StudentRepository.update(student.id,updateStudentDto);
    }


  async  remove(id: string) {

    const student = await this.findOne(id);
    if(!student) {
      throw new NotFoundException("Student not found");
    }
    return this.StudentRepository.delete(student.id);
  }
  async softRemove(id: string) {
    const student = await this.findOne(id);
    if(!student) {
      throw new NotFoundException("Student not found");
    }
    return this.StudentRepository.softDelete(student.id);
  }
  async findOneByIdentifier(identifier: string) {
    const identifiant = parseInt(identifier);
    return await this.StudentRepository.findOne({
      where: { cardID: identifiant }  
        }).then(Student => {
            if(!Student){
                throw new NotFoundException("Student not found");
            }
            return Student;
        }
    );
  }
}
