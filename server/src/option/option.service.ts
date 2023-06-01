import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vote } from 'src/vote/entities/vote.entity';
import { VoteService } from 'src/vote/vote.service';
import { Repository } from 'typeorm';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import {Option } from 'src/option/entities/option.entity'

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(Option)
    private readonly optionRepository: Repository<Option>,

    @Inject(Vote)
    private readonly voteService: VoteService
  ) { }

  create(voteId:string, CreateoptionDto: CreateOptionDto): Promise<Option> {
    // check if the vote exists
    return this.voteService.findOne(voteId).then((vote) => {  
      if(!vote) { 
        throw new Error("Vote not found");
      }
      // create the option
      const option = this.optionRepository.create(CreateoptionDto);
      option.vote = vote;
      return this.optionRepository.save(option);
    });
  }

  findAll(voteId: string): Promise<Option[]> {
    return this.optionRepository.find({
      where: {
        vote: {
          id: voteId
        }
      }
    });
  }



  findOne(id: string): Promise<Option> {
  return this.optionRepository.findOne({
    where: {
      id: id
    }
  }).then(Option => {
    if(!Option){
      throw new Error("Option not found");
    }
    return Option;
  });
}


update(id: string, updateoptionDto: UpdateOptionDto) {
  return this.optionRepository.update(id, updateoptionDto);
}


remove(id: string) {
  return this.optionRepository.delete(id);
}
}
