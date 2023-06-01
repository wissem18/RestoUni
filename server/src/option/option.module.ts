import { Module } from '@nestjs/common';
import { OptionService } from './option.service';
import { OptionController } from './option.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Option])
  ],
  controllers: [OptionController],
  providers: [OptionService]
})
export class OptionModule {}
