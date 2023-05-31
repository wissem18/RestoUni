import { Test, TestingModule } from '@nestjs/testing';
import { VoteStudentController } from './vote-student.controller';
import { VoteStudentService } from './vote-student.service';

describe('VoteStudentController', () => {
  let controller: VoteStudentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoteStudentController],
      providers: [VoteStudentService],
    }).compile();

    controller = module.get<VoteStudentController>(VoteStudentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
