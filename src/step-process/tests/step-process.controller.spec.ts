import { Test, TestingModule } from '@nestjs/testing';
import { StepProcessController } from '../step-process.controller';

describe('StepProcessController', () => {
  let controller: StepProcessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StepProcessController]
    }).compile();

    controller = module.get<StepProcessController>(StepProcessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
