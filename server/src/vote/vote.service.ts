import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import {Repository} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Vote } from './entities/vote.entity';
import { RestaurantService } from 'src/restaurant/restaurant.service';
@Injectable()
export class VoteService {
  /*constructor(
    @InjectRepository(Vote)
    private readonly voteRepository: Repository<Vote>,

    @Inject(RestaurantService)
    private readonly RestaurantService: RestaurantService
  ) { }

  async create(restaurantId:string, VoteDto: CreateVoteDto): Promise<Vote> {
    // check if the restaurant exists
    return this.RestaurantService.findOne(restaurantId).then((restaurant) => {  
      if(!restaurant) { 
        throw new NotFoundException("Restaurant not found");
      }
      // create the menu
      const menu = this.voteRepository.create(VoteDto);
      menu.restaurant = restaurant;
      return this.voteRepository.save(menu);
    });
  }

  async findAll(restaurantID:string): Promise<Vote[]> {
    return await this.voteRepository.find({
      where : {restaurant : {id : restaurantID}},
      relations : {Options: true} 
    },
    );
  }

  async findOne(id: string): Promise<Vote> {
    const vote =await this.voteRepository.findOne({where : {id : id}});
    if(!vote){
      throw new NotFoundException("le vote d'id ${id} n'existe pas")
    }
    return vote;
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
  }*/
}
