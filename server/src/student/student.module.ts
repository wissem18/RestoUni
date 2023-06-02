/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { Student } from './entities/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vote } from 'src/vote/entities/vote.entity';
import { Option } from 'src/option/entities/option.entity';
import {VoteStudent} from "../vote-student/entities/vote-student.entity";
import {OptionModule} from "../option/option.module";
import {VoteModule} from "../vote/vote.module";
import {VoteStudentModule} from "../vote-student/vote-student.module";

@Module({
  controllers: [StudentController],
  providers: [StudentService],
  imports: [TypeOrmModule.forFeature([Student, Vote,Option,VoteStudent]),
  VoteModule,OptionModule,VoteStudentModule],
  exports: [StudentService,TypeOrmModule]

})
export class StudentModule {}
