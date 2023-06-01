/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VoteService } from './vote.service';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';

@Controller('vote')
export class VoteController {
 constructor(private readonly voteService: VoteService) {}

  @Post()
  create(@Body() createVoteDto: CreateVoteDto,@Param("restaurantId") restaurantId: string) {
    return this.voteService.create(restaurantId,createVoteDto);
  }

  @Get()
  findAll(@Param("restaurantId") restaurantId: string) {
    return this.voteService.findAll(restaurantId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.voteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVoteDto: UpdateVoteDto) {
    return this.voteService.update(id, updateVoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.voteService.remove(id);
  }
}
