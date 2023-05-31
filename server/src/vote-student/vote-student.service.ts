import { Injectable } from '@nestjs/common';
import { CreateVoteStudentDto } from './dto/create-vote-student.dto';
import { UpdateVoteStudentDto } from './dto/update-vote-student.dto';

@Injectable()
export class VoteStudentService {
  create(createVoteStudentDto: CreateVoteStudentDto) {
    return 'This action adds a new voteStudent';
  }

  findAll() {
    return `This action returns all voteStudent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} voteStudent`;
  }

  update(id: number, updateVoteStudentDto: UpdateVoteStudentDto) {
    return `This action updates a #${id} voteStudent`;
  }

  remove(id: number) {
    return `This action removes a #${id} voteStudent`;
  }
}
