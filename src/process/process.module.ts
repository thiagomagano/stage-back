import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Process } from './process.entity';
import { Department } from '../department/department.entity';
import { Step } from '../step/step.entity';
import { ProcessController } from './process.controller';
import { ProcessService } from './process.service';

@Module({
  imports: [TypeOrmModule.forFeature([Process, Department, Step])],
  providers: [ProcessService],
  controllers: [ProcessController]
})
export class ProcessModule {}
