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

  findAll(voteId: string): Promise<Option[]> {
    //check if the vote exists
    return this.voteService.findOne(voteId).then((vote) => {
        if(!vote) {
            throw new NotFoundException("Vote not found");
        }
        return this.optionRepository.find({
            where: {
            vote: {
                id: voteId
            }
            }
        });
    });
  }



    findOne(voteId: string, optionId: string): Promise<Option> {
        return this.optionRepository.findOne({
            where: {
                id: Equal(optionId),
                vote: {
                    id: voteId
                }
            }
        }).then(option => {
            if (!option) {
                throw new NotFoundException("Option not found");
            }
            return option;
            //////
        });
    }



    update(voteid: string , id: string, updateOptionDto: UpdateOptionDto) {

        this.findOne(voteid , id).then((Option) => {
            if(!Option) {
                throw new NotFoundException("Option not found");
            }
        });
        return this.optionRepository.update(id, updateOptionDto);
    }



remove(voteid: string, id: string) {
    this.findOne(voteid , id).then((Option) => {
        if(!Option) {
            throw new NotFoundException("Option not found");
        }
    });
    return this.optionRepository.delete(id);
}
}
