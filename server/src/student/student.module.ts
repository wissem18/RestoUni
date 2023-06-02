import { Module, Res } from '@nestjs/common';
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
<<<<<<< HEAD
import { VoteService } from 'src/vote/vote.service';
import { OptionService } from 'src/option/option.service';
import { VoteStudentService } from 'src/vote-student/vote-student.service';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';
import { RestaurantService } from 'src/restaurant/restaurant.service';
=======
import {VoteService} from "../vote/vote.service";
import {OptionService} from "../option/option.service";
import {VoteStudentService} from "../vote-student/vote-student.service";
import {RestaurantService} from "../restaurant/restaurant.service";
import {Restaurant} from "../restaurant/entities/restaurant.entity";
>>>>>>> 57e5f1fb3c3d1524a91c79ebf6243cd3ce6b81c1

@Module({
  controllers: [StudentController],
  providers: [StudentService,VoteService,OptionService,VoteStudentService,RestaurantService],
  imports: [TypeOrmModule.forFeature([Student, Vote,Option,VoteStudent,Restaurant])],
  exports: [StudentService,TypeOrmModule]

})
export class StudentModule {}
