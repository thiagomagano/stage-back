import { Module } from '@nestjs/common';
import { StepProcess } from './step-process.entity';
import { Process } from '../process/process.entity';
import { Department } from '../department/department.entity';
import { StepProcessService } from './step-process.service';
import { StepProcessController } from './step-process.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([StepProcess, Process, Department])],
  providers: [StepProcessService],
  controllers: [StepProcessController]
})
export class StepProcessModule {}
