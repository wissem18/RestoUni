/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor
} from '@nestjs/common';
import { VoteStudentService } from './vote-student.service';
import { CreateVoteStudentDto } from './dto/create-vote-student.dto';
import { UpdateVoteStudentDto } from './dto/update-vote-student.dto';

@Controller('vote-student')
@UseInterceptors(ClassSerializerInterceptor)
export class VoteStudentController {
  constructor(private readonly voteStudentService: VoteStudentService) {}

  @Post(':restaurantId/:studentId/:voteId')
  create(@Param('restaurantId') restaurantId: string, @Param('studentId') studentId: string, @Param('voteId') voteId: string,
         @Body('optionId') optionId: string) {
    return this.voteStudentService.create(voteId,  studentId, optionId);
  }

  @Get(':restaurantId/:studentId/:voteId')
  findOne(@Param('restaurantId') restaurantId: string, @Param('studentId') studentId: string, @Param('voteId') voteId: string) {
    return this.voteStudentService.findOne( voteId, studentId);
  }

}
