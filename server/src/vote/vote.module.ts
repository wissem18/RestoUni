/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { VoteService } from './vote.service';
import { VoteController } from './vote.controller';
import { Vote } from './entities/vote.entity';

import { TypeOrmModule } from '@nestjs/typeorm';

import {RestaurantService} from "../restaurant/restaurant.service";
import {Restaurant} from "../restaurant/entities/restaurant.entity";
import { Option } from 'src/option/entities/option.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Vote,Restaurant,Option]),
  ],
  controllers: [VoteController],
  providers: [VoteService,RestaurantService],
  exports: [VoteService,TypeOrmModule]

})
export class VoteModule {}
