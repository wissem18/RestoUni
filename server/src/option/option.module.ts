import { Module } from '@nestjs/common';
import { OptionService } from './option.service';
import { OptionController } from './option.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VoteService } from 'src/vote/vote.service';
import { Vote } from 'src/vote/entities/vote.entity';

@Module({
  controllers: [OptionController],
  providers: [OptionService,VoteService],
  imports: [TypeOrmModule.forFeature([Option,Vote])],
  exports: [OptionService,TypeOrmModule]
})
export class OptionModule {}
