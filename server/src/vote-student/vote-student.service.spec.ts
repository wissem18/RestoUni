import { Test, TestingModule } from '@nestjs/testing';
import { VoteStudentService } from './vote-student.service';

describe('VoteStudentService', () => {
  let service: VoteStudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VoteStudentService],
    }).compile();

    service = module.get<VoteStudentService>(VoteStudentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
