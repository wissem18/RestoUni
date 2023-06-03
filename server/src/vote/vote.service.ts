/* eslint-disable prettier/prettier */
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { Equal, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Vote } from './entities/vote.entity';
import { Restaurant } from "../restaurant/entities/restaurant.entity";
import { Option } from 'src/option/entities/option.entity';

@Injectable()
export class VoteService {
  constructor(
    @InjectRepository(Vote)
    private readonly voteRepository: Repository<Vote>,

    @InjectRepository(Restaurant)
    private readonly restaurantRepository: Repository<Restaurant>,
    @InjectRepository(Option)
    private readonly optionRepository: Repository<Option>,

  ) { }

  async create(restaurantId: string, VoteDto: CreateVoteDto): Promise<Vote> {

    const restaurant = await this.restaurantRepository.findOne({ where: { id: Equal(restaurantId) } });

    if (!restaurant) {
      throw new NotFoundException("Restaurant not found");
    }

    const { name, description } = VoteDto;
    console.log(name);
    console.log(description);
    const vote = new Vote();
    vote.name = name;
    vote.description = description;
    vote.restaurant = restaurant;

    const createdVote = await this.voteRepository.save(vote);
    return createdVote;
  }

  async findAll(restaurantId: string): Promise<Vote[]> {
    const restaurant = await this.restaurantRepository.findOne({ where: { id: Equal(restaurantId) } });

    if (!restaurant) {
      throw new NotFoundException("Restaurant not found");
    }
    return await this.voteRepository.find({
      where: {
        restaurant: { id: restaurantId }
      },
      relations: {
        Options: true,
        voteStudents: true
      }
    },
    );
  }
  async findOne(id: string): Promise<Vote> {

    return this.voteRepository.findOne({
      where: {
        id: id
      },
      relations: {
        Options: true,
        voteStudents: true
      }
    }).then(Vote => {
      if (!Vote) {
        throw new Error("Vote not found");
      }
      return Vote;
    });
  }

  async update(id: string, updateVoteDto: UpdateVoteDto): Promise<Vote> {
    const vote = await this.voteRepository.findOne({ where: { id: id } });
    if (!vote) {
      throw new NotFoundException(`Vote with id ${id} not found`);
    }
    const updatedVote = Object.assign(vote, updateVoteDto);
    return await this.voteRepository.save(updatedVote);
  }

  async remove(id: string) {
    const vote = await this.voteRepository.findOne({ where: { id: id } });
    if (!vote) {
      throw new NotFoundException(`Vote with id ${id} not found`);
    }
    return await this.voteRepository.remove(vote);

  }
}
