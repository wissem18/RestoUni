/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { OptionService } from './option.service';
import { OptionController } from './option.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Option } from './entities/option.entity';
import { Vote } from 'src/vote/entities/vote.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Option]), TypeOrmModule.forFeature([Vote])
  ],
  controllers: [OptionController],
  providers: [OptionService]
})
export class OptionModule {}
