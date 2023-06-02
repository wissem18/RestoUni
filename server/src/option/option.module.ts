/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { OptionService } from './option.service';
import { OptionController } from './option.controller';
import { TypeOrmModule } from '@nestjs/typeorm';


import { Option } from './entities/option.entity';

import { VoteService } from 'src/vote/vote.service';
import { Vote } from 'src/vote/entities/vote.entity';
import {VoteModule} from "../vote/vote.module";
import { RestaurantService } from 'src/restaurant/restaurant.service';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';


@Module({
  controllers: [OptionController],
  providers: [OptionService,VoteService,RestaurantService],
  imports: [TypeOrmModule.forFeature([Option,Vote,Restaurant])],
  exports: [OptionService,TypeOrmModule]
})
export class OptionModule {}
