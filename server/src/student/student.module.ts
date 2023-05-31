import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { Student } from './entities/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [StudentController],
  providers: [StudentService],
  imports: [TypeOrmModule.forFeature([Student])],

})
export class StudentModule {}
