/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { VoteService } from './vote.service';
import { VoteController } from './vote.controller';
import { Vote } from './entities/vote.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Vote]), TypeOrmModule.forFeature([Restaurant])
  ],
  controllers: [VoteController],
  providers: [VoteService]

})
export class VoteModule {}
