/* eslint-disable prettier/prettier */

import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ClassSerializerInterceptor} from '@nestjs/common';
import {OptionService} from "./option.service";
import {CreateOptionDto} from "./dto/create-option.dto";
import {UpdateOptionDto} from "./dto/update-option.dto";
import {Option} from "./entities/option.entity";



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
  findOne(@Param('id') id: string) {
    return this.optionService.findOne( id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOptionDTO: UpdateOptionDto ) {
    return this.optionService.update(id, updateOptionDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.optionService.remove(id);
  }

}
