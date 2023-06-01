/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor
} from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { v4 as uuid } from 'uuid';
import {Menu} from "../menu/entities/menu.entity";

@Controller('restaurant')
@UseInterceptors(ClassSerializerInterceptor)
export class RestaurantController {
 constructor(private readonly restaurantService: RestaurantService) {}

  @Post()
  create(@Body() createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantService.create(createRestaurantDto);
  }

  @Get()
  findAll() {
    return this.restaurantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: uuid) {

    return this.restaurantService.findOne(id);
  }



  @Patch(':id')
  update(@Param('id') id: uuid, @Body() updateRestaurantDto: UpdateRestaurantDto) {
    return this.restaurantService.update(id, updateRestaurantDto);
  }

  @Delete(':id')

  remove(@Param('id') id: string) {
    return this.restaurantService.remove(id);
  }

}

