import {Injectable} from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Restaurant} from "./entities/restaurant.entity";
import {Menu} from "../menu/entities/menu.entity";



@Injectable()
export class RestaurantService {
    constructor(
        @InjectRepository(Restaurant)
        private readonly RestaurantRepository: Repository<Restaurant>
    ) {}
  create(createRestaurantDto: CreateRestaurantDto) {
    return  this.RestaurantRepository.save(createRestaurantDto);
  }

  findAll() {
    return  this.RestaurantRepository.find();
  }

  findOne(id: string): Promise<Restaurant> {
    return this.RestaurantRepository.findOne({
      where: {
        id: id
      }
    }).then(Restaurant => {
      if(!Restaurant){
        throw new Error("Restaurant not found");
      }
      return Restaurant;
    });
  }

  update(id: string, updateRestaurantDto: UpdateRestaurantDto) {
    return this.RestaurantRepository.update(id, updateRestaurantDto);
  }

  remove(id: string) {
    return this.RestaurantRepository.delete(id);
  }
}
