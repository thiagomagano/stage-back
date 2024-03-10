import { Test, TestingModule } from '@nestjs/testing';
import { StepProcessService } from '../step-process.service';

describe('StepProcessService', () => {
  let service: StepProcessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StepProcessService]
    }).compile();

    service = module.get<StepProcessService>(StepProcessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
