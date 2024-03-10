import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Process } from './process.entity';
import { Department } from '../department/department.entity';
import { StepProcess } from '../step-process/step-process.entity';
import { ProcessController } from './process.controller';
import { ProcessService } from './process.service';

@Module({
  imports: [TypeOrmModule.forFeature([Process, Department, StepProcess])],
  providers: [ProcessService],
  controllers: [ProcessController]
})
export class ProcessModule {}
