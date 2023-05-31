import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VoteStudentService } from './vote-student.service';
import { CreateVoteStudentDto } from './dto/create-vote-student.dto';
import { UpdateVoteStudentDto } from './dto/update-vote-student.dto';

@Controller('vote-student')
export class VoteStudentController {
  constructor(private readonly voteStudentService: VoteStudentService) {}

  @Post()
  create(@Body() createVoteStudentDto: CreateVoteStudentDto) {
    return this.voteStudentService.create(createVoteStudentDto);
  }

  @Get()
  findAll() {
    return this.voteStudentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.voteStudentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVoteStudentDto: UpdateVoteStudentDto) {
    return this.voteStudentService.update(+id, updateVoteStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.voteStudentService.remove(+id);
  }
}
