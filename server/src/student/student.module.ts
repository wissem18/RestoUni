import { Module, Res } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { Student } from './entities/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vote } from 'src/vote/entities/vote.entity';
import { Option } from 'src/option/entities/option.entity';
import {VoteStudent} from "../vote-student/entities/vote-student.entity";
import { VoteService } from 'src/vote/vote.service';
import { OptionService } from 'src/option/option.service';
import { VoteStudentService } from 'src/vote-student/vote-student.service';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';
import { RestaurantService } from 'src/restaurant/restaurant.service';

@Module({
  controllers: [StudentController],
  providers: [StudentService,VoteService,OptionService,VoteStudentService,RestaurantService],
  imports: [TypeOrmModule.forFeature([Student, Vote,Option,VoteStudent,Restaurant])],
  exports: [StudentService,TypeOrmModule]

})
export class StudentModule {}
