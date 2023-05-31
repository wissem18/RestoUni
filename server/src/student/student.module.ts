import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { Student } from './entities/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vote } from 'src/vote/entities/vote.entity';
import { Option } from 'src/option/entities/option.entity';

@Module({
  controllers: [StudentController],
  providers: [StudentService],
  imports: [TypeOrmModule.forFeature([Student]), TypeOrmModule.forFeature([Vote]), TypeOrmModule.forFeature([Option])],

})
export class StudentModule {}
