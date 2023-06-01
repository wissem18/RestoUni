/* eslint-disable prettier/prettier */
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vote } from 'src/vote/entities/vote.entity';
import { Repository } from 'typeorm';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import {Option } from 'src/option/entities/option.entity'

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(Option)
    private readonly optionRepository: Repository<Option>,

    @InjectRepository(Vote)
    private readonly voteRepository: Repository<Vote>
  ) { }

  create(voteID,createOptionDto: CreateOptionDto) {
      // check if the restaurant exists
    return this.voteRepository.findOne({where:{id:voteID}}).then((Vote) => {  
      if(!Vote) { 
        throw new NotFoundException("Vote not found");
      }
     
      const option = this.optionRepository.create(createOptionDto);
      option.vote = Vote;
      return this.optionRepository.save(option);
    });
  }

  findAll() {
    return `This action returns all option`;
  }

  findOne(id: number) {
    return `This action returns a #${id} option`;
  }

  update(id: number, updateOptionDto: UpdateOptionDto) {
    return `This action updates a #${id} option`;
  }

  remove(id: number) {
    return `This action removes a #${id} option`;
  }
}
