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
  ClassSerializerInterceptor,
  UseGuards
} from '@nestjs/common';
import { VoteStudentService } from './vote-student.service';
import { AuthGuard } from 'src/student/Guards/auth.guard';
import { RestauAuthGuard } from 'src/restaurant/Guards/restau.auth.guard';


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
  @UseGuards(RestauAuthGuard)

  findOne( @Param('studentId') studentId: string, @Param('voteId') voteId: string) {

    return this.voteStudentService.findOne( voteId, studentId);
  }
  @Get('stat/:votedId/:optionId')
  @UseGuards(RestauAuthGuard)
  getStat(@Param('votedId') votedId: string, @Param('optionId') optionId: string){
    return this.voteStudentService.getStat(votedId,optionId);
  }
}
