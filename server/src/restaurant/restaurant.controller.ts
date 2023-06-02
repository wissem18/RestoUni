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
  ClassSerializerInterceptor,
  Res,
  UseGuards
} from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { v4 as uuid } from 'uuid';
import {Menu} from "../menu/entities/menu.entity";
import {RestauLoginCredentialsDto} from "./dto/restaulogin-credentials.dto";
import { RestauAuthGuard } from './Guards/restau.auth.guard';

@Controller('restaurant')
@UseInterceptors(ClassSerializerInterceptor)
export class RestaurantController {
 constructor(private readonly restaurantService: RestaurantService) {}

 @Post('login')
 login(@Body() RestauLoginCredentialsDto: RestauLoginCredentialsDto) {
     return this.restaurantService.login(RestauLoginCredentialsDto);
} 
 
 @Post()
 create(@Body() createRestaurantDto: CreateRestaurantDto) {
   return this.restaurantService.create(createRestaurantDto);
 }

  @Get()
  @UseGuards(RestauAuthGuard)
  findAll() {
    return this.restaurantService.findAll();
  }
  @Get('find/:name')
  @UseGuards(RestauAuthGuard)
  findByName(@Param('name') name: string) {

    return this.restaurantService.findByName(name);
  }
  @Get(':id')
  @UseGuards(RestauAuthGuard)
  findOne(@Param('id') id: string) {

    return this.restaurantService.findOne(id);
  }
  @Get('identifier/:identifier')
  @UseGuards(RestauAuthGuard)
  findByIdentifer(@Param('identifier') identifier: number) {

    return this.restaurantService.findByIdentifier(identifier);
  }


  @Patch(':id')
  @UseGuards(RestauAuthGuard)
  update(@Param('id') id: uuid, @Body() updateRestaurantDto: UpdateRestaurantDto) {
    return this.restaurantService.update(id, updateRestaurantDto);
  }

  @Delete(':id')
  @UseGuards(RestauAuthGuard)
  remove(@Param('id') id: string) {
    return this.restaurantService.remove(id);
  }


}

