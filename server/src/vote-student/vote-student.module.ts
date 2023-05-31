import { Module } from '@nestjs/common';
import { VoteStudentService } from './vote-student.service';
import { VoteStudentController } from './vote-student.controller';

@Module({
  controllers: [VoteStudentController],
  providers: [VoteStudentService]
})
export class VoteStudentModule {}
