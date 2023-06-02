/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Equal, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import {Restaurant} from "../restaurant/entities/restaurant.entity";
import * as bcrypt from 'bcrypt';
import {LoginCredentialsDto} from "./dto/login-credentials.dto";
import {JwtService} from "@nestjs/jwt";


@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly StudentRepository: Repository<Student>,
    @InjectRepository(Restaurant)
    private readonly RestaurantRepository: Repository<Restaurant>,
    private jwtService: JwtService
  ) {}
  async create(restaurantId: string ,  createStudentDto: CreateStudentDto) {
    const restaurant = await this.RestaurantRepository.findOne({where : {id  : Equal(restaurantId)}});
    if(!restaurant) {
      throw new NotFoundException("Restaurant not found");
    }
    const student = this.StudentRepository.create(createStudentDto);
    student.salt = await bcrypt.genSalt();
    student.password = await bcrypt.hash(student.password, student.salt);
    student.restaurant = restaurant;
    return this.StudentRepository.save(student);
  }



  async findAll() {
    return this.StudentRepository.find({
      relations : {
        voteStudents:true
      }
    },
    );
  }

  async findOne(id: string) {
    return await this.StudentRepository.findOne({
          where : { id : id },
          relations : {
            voteStudents:true
          }
        }).then(Student => {
            if(!Student){
                throw new NotFoundException("Student not found");
            }
            return Student;
        }
    );
  }


   async  update(  id: string, updateStudentDto: UpdateStudentDto) {

      const student = await this.findOne(id );
    if(!student) {
      throw new NotFoundException("Student not found");
    }
    return this.StudentRepository.update(student.id,updateStudentDto);
    }


  async  remove(  id: string) {

    const student = await this.findOne(id );
    if(!student) {
      throw new NotFoundException("Student not found");
    }
    return this.StudentRepository.delete(student.id);
  }


    async login(userData : LoginCredentialsDto){
        const user = {
            cardID : userData.cardID,
            password : userData.password
        }
        const userFound = await this.StudentRepository.createQueryBuilder("user").
        where("user.cardId = :cardId", {
            cardId : user.cardID
        }).getOne();
        if( !userFound ){
            throw new NotFoundException("CardId or Password Incorrect !");
        }
        const hashedPassword = await bcrypt.hash(user.password , userFound.salt);
        if(hashedPassword == userFound.password) {

            const payload = {
                id : userFound.id,
                firstname : userFound.firstname,
                lastname : userFound.lastname,
                email : userFound.email,
                cardID : userFound.cardID,
            }
            return({
                token: await this.jwtService.signAsync(payload)
            })
        }else {
            throw new NotFoundException("Email or Password Incorrect !");
        }
    }
}
