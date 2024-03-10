import { Module } from '@nestjs/common';
import { StepProcess } from './step-process.entity';
import { Process } from '../process/process.entity';
import { Department } from '../department/department.entity';
import { StepProcessService } from './step-process.service';

@Module({
  imports: [StepProcess, Process, Department],
  providers: [StepProcessService],
  controllers: []
})
export class StepProcessModule {}
