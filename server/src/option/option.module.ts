import { Module } from '@nestjs/common';
import { OptionService } from './option.service';
import { OptionController } from './option.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Option } from './entities/option.entity';

import { VoteService } from 'src/vote/vote.service';
import { Vote } from 'src/vote/entities/vote.entity';
import {VoteModule} from "../vote/vote.module";


@Module({
  controllers: [OptionController],
  providers: [OptionService,VoteService],
  imports: [TypeOrmModule.forFeature([Option,Vote]),
  VoteModule],
  exports: [OptionService,TypeOrmModule]
})
export class OptionModule {}
