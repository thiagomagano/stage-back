import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Process } from './process.entity';
import { Department } from '../department/department.entity';
import { Step } from '../step/step.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Process, Department, Step])],
  providers: [],
  controllers: []
})
export class ProcessModule {}
