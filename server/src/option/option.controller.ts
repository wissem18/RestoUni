/* eslint-disable prettier/prettier */

import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ClassSerializerInterceptor, UseGuards} from '@nestjs/common';
import {OptionService} from "./option.service";
import {CreateOptionDto} from "./dto/create-option.dto";
import {UpdateOptionDto} from "./dto/update-option.dto";
import {Option} from "./entities/option.entity";
import { AuthGuard } from 'src/student/Guards/auth.guard';
import { RestauAuthGuard } from 'src/restaurant/Guards/restau.auth.guard';



@Controller('option')
@UseInterceptors(ClassSerializerInterceptor)
export class OptionController {
  constructor(private readonly optionService: OptionService) {}


  @Post(":voteId")
  create(@Param('voteId') voteId: string, @Body() createOptionDto: CreateOptionDto) {
    return this.optionService.create(voteId, createOptionDto);

  }

  @Get(":voteId")
  findAll(@Param('votetId') voteId: string): Promise<Option[]> {
    return this.optionService.findAll(voteId);
  }

  @Get(':id')
  @UseGuards(RestauAuthGuard||AuthGuard)

  findOne(@Param('id') id: string) {
    return this.optionService.findOne( id);
  }

  @Patch(':id')
  @UseGuards(RestauAuthGuard)

  update(@Param('id') id: string, @Body() updateOptionDTO: UpdateOptionDto ) {
    return this.optionService.update(id, updateOptionDTO);
  }

  @Delete(':id')
  @UseGuards(RestauAuthGuard)

  remove(@Param('id') id: string) {
    return this.optionService.remove(id);
  }

}
