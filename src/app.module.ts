import { Module } from '@nestjs/common';
import { ProcessModule } from './process/process.module';
import { DepartmentModule } from './department/department.module';
import { DatabaseModule } from './database.module';


import { StepModule } from './step/step.module';

@Module({
  imports: [DatabaseModule, ProcessModule, DepartmentModule, StepModule]
})
export class AppModule {}
