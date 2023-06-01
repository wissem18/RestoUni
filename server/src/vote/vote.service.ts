/* eslint-disable prettier/prettier */
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import {Equal, Repository} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Vote } from './entities/vote.entity';

import { RestaurantService } from 'src/restaurant/restaurant.service';
import {Restaurant} from "../restaurant/entities/restaurant.entity";

@Injectable()
export class VoteService {
  constructor(
    @InjectRepository(Vote)
    private readonly voteRepository: Repository<Vote>,

    @InjectRepository(Restaurant)
    private readonly restaurantRepository: Repository<Restaurant>,

  ) { }

  async create(restaurantId:string, VoteDto: CreateVoteDto): Promise<Vote> {
    // check if the restaurant exists

    const restaurant = await this.restaurantRepository.findOne({where : {id  : Equal(restaurantId)}});

      if(!restaurant) { 
        throw new NotFoundException("Restaurant not found");
      }
     
      const vote = this.voteRepository.create(VoteDto);
      vote.restaurant = restaurant;
      return this.voteRepository.save(vote);
  }

  async findAll(restaurantID:string): Promise<Vote[]> {
    return await this.voteRepository.find({
      where : {restaurant : {id : restaurantID}},
      relations : {
        Options: true,
        voteStudents:true
      } 
    },
    );
  }
  async findOne(id: string): Promise<Vote> {

    return this.voteRepository.findOne({
      where: {
        id: id
      },
      relations:{
        Options: true,
        voteStudents:true
      }
    }).then(Vote => {
      if(!Vote){
        throw new Error("Vote not found");
      }
      return Vote;
    });
  }

  async update(id: string, updateVoteDto: UpdateVoteDto): Promise<Vote> {
    const vote = await this.voteRepository.findOne({ where: { id: id } });
    if (!vote) {
      // Handle error when vote is not found
      throw new NotFoundException(`Vote with id ${id} not found`);
    }

    // Update the vote object with the new data
    const updatedVote = Object.assign(vote, updateVoteDto);
    return await this.voteRepository.save(updatedVote);
  }

  async remove(id: string): Promise<void> {
    const vote = await this.voteRepository.findOne({ where: { id: id } });
    if (!vote) {
      // Handle error when vote is not found
      throw new NotFoundException(`Vote with id ${id} not found`);
    }
    await this.voteRepository.remove(vote);
  }
}
