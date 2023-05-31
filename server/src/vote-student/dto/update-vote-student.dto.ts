import { PartialType } from '@nestjs/mapped-types';
import { CreateVoteStudentDto } from './create-vote-student.dto';

export class UpdateVoteStudentDto extends PartialType(CreateVoteStudentDto) {}
