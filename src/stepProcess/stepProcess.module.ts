import { Module } from '@nestjs/common';
import { StepProcess } from './stepProcess.entity';
import { Process } from '../process/process.entity';
import { Department } from '../department/department.entity';

@Module({
  imports: [StepProcess, Process, Department],
  providers: [],
  controllers: []
})
export class StepProcessModule {}
