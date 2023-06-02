/* eslint-disable prettier/prettier */

import {ConflictException, Injectable, NotFoundException} from '@nestjs/common'
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Restaurant} from "./entities/restaurant.entity";
import {Menu} from "../menu/entities/menu.entity";
import {Vote} from "../vote/entities/vote.entity";
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RestauLoginCredentialsDto } from './dto/restaulogin-credentials.dto';


@Injectable()
export class RestaurantService {

    constructor(
        @InjectRepository(Restaurant)
        private readonly RestaurantRepository: Repository<Restaurant>,
        private jwtService: JwtService
    ) {}


  async create(createRestaurantDto: CreateRestaurantDto) {
        const restaurant = await this.RestaurantRepository.create(createRestaurantDto);
        restaurant.salt=  await bcrypt.genSalt();
        restaurant.password =  await bcrypt.hash(restaurant.password, restaurant.salt);
        try{
          await this.RestaurantRepository.save(restaurant);
      }catch(e){
          throw new ConflictException("Name or Identifiant or or telephone already exists !");
      }
      
      const returnedRestaurant = {
        id: restaurant.id,
        name: restaurant.name,
        identifiant: restaurant.identifiant,
        localisation: restaurant.localisation,
        telephone: restaurant.telephone
      }
    
      return({
            token: await this.jwtService.signAsync(returnedRestaurant)
        });
  }

    async findAll(): Promise<Restaurant[]> {
        return await this.RestaurantRepository.find({
                relations : {
                    Menus: true,
                    Students:true,  
                    Votes:true
                }
            },
        );
    }

  findOne(id: string): Promise<Restaurant> {
    return this.RestaurantRepository.findOne({
      where: {
        id: id
      },
      relations: {
        Menus: true,
        Students: true,
        Votes: true
      }
    }).then(Restaurant => {
      if (!Restaurant) {
        throw new NotFoundException("Restaurant not found");
      }
      return Restaurant;
    });

  }

  async update(id: string, updateRestaurantDto: UpdateRestaurantDto) {
    //chek if the restaurant exists
    const restaurant = this.RestaurantRepository.findOne({ where: { id: id } });
    if (!restaurant) {
      throw new NotFoundException("Restaurant not found");
    }
    const newResto = await this.RestaurantRepository.update(id, updateRestaurantDto)
    const payload = {
      id: newResto["id"],
      name: newResto["name"],
      identifiant: newResto["identifiant"],
      localisation: newResto["localisation"],
      telephone: newResto["telephone"]
    }
    return { token: await this.jwtService.signAsync(payload)};
  }

  remove(id: string) {

    const restaurant = this.RestaurantRepository.findOne({ where: { id: id } });
    if (!restaurant) {
      throw new NotFoundException("Restaurant not found");
    }
    return this.RestaurantRepository.delete(id);
  }
  softRemove(id: string) {
    const restaurant = this.RestaurantRepository.findOne({ where: { id: id } });
    if (!restaurant) {
      throw new NotFoundException("Restaurant not found");
    }
    return this.RestaurantRepository.softDelete(id);
  }
  findByName(name: string): Promise<Restaurant> {
    return this.RestaurantRepository.findOne({
      where: {
        name: name
      },
      relations: {
        Menus: true,
        Students: true,
        Votes: true
      }
    }).then(Restaurant => {
      if (!Restaurant) {
        throw new NotFoundException("Restaurant not found");
      }
      return Restaurant;
    });
  }
  findByIdentifier(identifier: number): Promise<Restaurant> {
    return this.RestaurantRepository.findOne({
      where: {
        identifiant: identifier
      },
      relations: {
        Menus: true,
        Students: true,
        Votes: true
      }
    }).then(Restaurant => {
      if (!Restaurant) {
        throw new NotFoundException("Restaurant not found");
      }
      return Restaurant;
    });
  }

  async login( restauData : RestauLoginCredentialsDto){
    const restau = {
        identifiant : restauData.identifiant,
        password : restauData.password
    }
    const restauFound = await this.RestaurantRepository.createQueryBuilder("restau").
    where("restau.identifiant = :identifiant", {
        identifiant: restau.identifiant
    }).getOne();
    if( !restauFound ){
      console.log("1");
        throw new NotFoundException("identifiant or Password Incorrect !");
    }
    const hashedPassword = await bcrypt.hash(restau.password , restauFound.salt);
    if(hashedPassword == restauFound.password) {

        const payload = {
            id: restauFound.id,
            name: restauFound.name,
            identifiant: restauFound.identifiant,
            localisation: restauFound.localisation,
            telephone: restauFound.telephone
        }
        return({
            token: await this.jwtService.signAsync(payload)
        })
    }else {
        throw new NotFoundException("identifinat or Password Incorrect !");
    }
}



}