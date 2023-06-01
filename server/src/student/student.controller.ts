import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('student/:restaurantId')
@UseInterceptors(ClassSerializerInterceptor)
export class StudentController {
  constructor(private readonly studentService: StudentService) { }

  @Post()
  create(@Param('restaurantId') restaurantId: string, @Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(restaurantId, createStudentDto);
  }

  @Get()
  findAll(@Param('restaurantId') restaurantId: string) {
    return this.studentService.findAll(restaurantId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Param('restaurantId') restaurantId: string) {
    return this.studentService.findOne(id, restaurantId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto, @Param('restaurantId') restaurantId: string) {
    return this.studentService.update(restaurantId, id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Param('restaurantId') restaurantId: string) {
    return this.studentService.remove(restaurantId, id);
  }
}
