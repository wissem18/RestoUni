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


@Controller('vote-student')
@UseInterceptors(ClassSerializerInterceptor)
export class VoteStudentController {
  constructor(private readonly voteStudentService: VoteStudentService) {}

  @Post(':studentId/:voteId')
  create( @Param('studentId') studentId: string, @Param('voteId') voteId: string,
         @Body("optionId")optionId:string) {
    return this.voteStudentService.create(voteId,  studentId, optionId);
  }

  @Get('studentId/:voteId')
  findOne( @Param('studentId') studentId: string, @Param('voteId') voteId: string) {
    return this.voteStudentService.findOne( voteId, studentId);
  }

}
