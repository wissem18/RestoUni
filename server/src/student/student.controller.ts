import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('student')
@UseInterceptors(ClassSerializerInterceptor)
export class StudentController {
  constructor(private readonly studentService: StudentService) { }

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentService.findAll();
  }
  @Get('identifier/:identifier')
  findByIdentifier(@Param('identifier') identifier:number){
    return this.studentService.findByIdentifier(identifier);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(id);
  }

 /* @Post(':studentId/vote/:voteId')
  async vote(
    @Param('studentId') studentId: string,
    @Param('voteId') voteId: string,
    @Body('optionId') optionId: string,
  ) {
    await this.studentService.Vote(studentId, voteId, optionId);
    return { message: 'Vote recorded successfully' };
  }*/
}
