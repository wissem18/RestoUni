/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import {LoginCredentialsDto} from "./dto/login-credentials.dto";

@Controller('student')
@UseInterceptors(ClassSerializerInterceptor)
export class StudentController {
  constructor(private readonly studentService: StudentService) { }

  @Post('login')
  login(@Body() loginCredentialsDto: LoginCredentialsDto) {
    return this.studentService.login(loginCredentialsDto);
  }
  @Post(":restaurantId")
  create(@Param('restaurantId') restaurantId: string, @Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(restaurantId, createStudentDto);
  }



  @Get()
  findAll() {
    return this.studentService.findAll();

  }
  @Get("identifier/:identifier")
  findOneByIdentifier(@Param('identifier') identifier: string) {
    return this.studentService.findOneByIdentifier(identifier);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {

    return this.studentService.update( id, updateStudentDto);

  }

  @Delete(':id')
  remove(@Param('id') id: string) {
   return this.studentService.remove( id);
  }
}
