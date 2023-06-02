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

import { VoteService } from './vote.service';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { RestauAuthGuard } from 'src/restaurant/Guards/restau.auth.guard';
import { AuthGuard } from 'src/student/Guards/auth.guard';

@Controller('vote')
@UseInterceptors(ClassSerializerInterceptor)

export class VoteController {
 constructor(private readonly voteService: VoteService) {}

  @Post(":restaurantId")
  @UseGuards(RestauAuthGuard)

  create(@Body() createVoteDto: CreateVoteDto,@Param("restaurantId") restaurantId: string) {
    return this.voteService.create(restaurantId,createVoteDto);
  }

  @Get()
  @UseGuards(RestauAuthGuard||AuthGuard)

  findAll() {
    return this.voteService.findAll();
  }

  @Get(':id')
  @UseGuards(RestauAuthGuard||AuthGuard)
  findOne(@Param('id') id: string) {
    return this.voteService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(RestauAuthGuard)
  update(@Param('id') id: string, @Body() updateVoteDto: UpdateVoteDto) {
    return this.voteService.update(id, updateVoteDto);
  }

  @Delete(':id')
  @UseGuards(RestauAuthGuard)
  remove(@Param('id') id: string) {
    return this.voteService.remove(id);
  }
}
