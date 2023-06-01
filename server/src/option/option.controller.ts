
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
  create(@Param('votetId') voteId: string, @Body() createOptionDto: CreateOptionDto) {
    return this.optionService.create(voteId, createOptionDto);

  }

  @Get('/vote/:voteId')
  findAll(@Param("voteId") voteId: string): Promise<Option[]> {
    return this.optionService.findAll(voteId);
  }

  @Get(':id/vote/:voteId')
  findOne(@Param('id') id: string, @Param('voteId') voteId: string) {
    return this.optionService.findOne(voteId, id);
  }

  @Patch(':id/vote/:voteId')
  update(@Param('id') id: string, @Body() updateOptionDTO: UpdateOptionDto , @Param('voteId') voteId: string) {
    return this.optionService.update(voteId ,id, updateOptionDTO);
  }

  @Delete(':id/vote/:voteId')
  remove(@Param('id') id: string, @Param('voteId') voteId: string) {
    return this.optionService.remove(voteId, id);
  }

}
