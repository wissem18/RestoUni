/* eslint-disable prettier/prettier */
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vote } from 'src/vote/entities/vote.entity';

import { VoteService } from 'src/vote/vote.service';
import {Equal, Repository} from 'typeorm';

import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import {Option } from 'src/option/entities/option.entity'

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(Option)
    private readonly optionRepository: Repository<Option>,

    @Inject(VoteService)
    private readonly voteService: VoteService
  ) { }

  create(voteId:string, CreateoptionDto: CreateOptionDto): Promise<Option> {
    // check if the vote exists
    return this.voteService.findOne(voteId).then((vote) => {  
      if(!vote) { 

        throw new NotFoundException("Vote not found");
      }
      // create the option
      const option = this.optionRepository.create(CreateoptionDto);
      option.vote = vote;
      return this.optionRepository.save(option);
    });
  }

  findAll(): Promise<Option[]> {
        return this.optionRepository.find({});
  }



    findOne(optionId: string): Promise<Option> {
        return this.optionRepository.findOne({
            where: {
                id: optionId,
            }
        }).then(option => {
            if (!option) {
                throw new NotFoundException("Option not found");
            }
            return option;
        });
    }



    update(id: string, updateOptionDto: UpdateOptionDto) {

        this.findOne(id).then((Option) => {
            if(!Option) {
                throw new NotFoundException("Option not found");
            }
        });
        return this.optionRepository.update(id, updateOptionDto);
    }



remove( id: string) {
    this.findOne( id).then((Option) => {
        if(!Option) {
            throw new NotFoundException("Option not found");
        }
    });
    return this.optionRepository.delete(id);
}
softRemove(voteid: string, id: string) {
    this.findOne(id).then((Option) => {
        if(!Option) {
            throw new NotFoundException("Option not found");
        }
    });
    return this.optionRepository.softDelete(id);
}
}