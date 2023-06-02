/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Restaurant} from "./entities/restaurant.entity";
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [RestaurantController],
  providers: [RestaurantService],
  imports:[TypeOrmModule.forFeature([Restaurant]),
  PassportModule.register({defaultStrategy:'jwt'}),
  JwtModule.register({global:true,  secret: "secretkey", signOptions :{expiresIn : 3600}})],
  exports: [RestaurantService,TypeOrmModule]
})
export class RestaurantModule {}
