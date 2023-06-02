import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ClassSerializerInterceptor, UseGuards } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import {LoginCredentialsDto} from "./dto/login-credentials.dto";
import { AuthGuard } from './Guards/auth.guard';

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
  @UseGuards(AuthGuard)
  findAll() {
    return this.studentService.findAll();

  }
  @Get("identifier/:identifier")
  @UseGuards(AuthGuard)
  findOneByIdentifier(@Param('identifier') identifier: string) {
    return this.studentService.findOneByIdentifier(identifier);
  }
  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {

    return this.studentService.update( id, updateStudentDto);

  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
   return this.studentService.remove( id);
  }
}
