import { Module } from '@nestjs/common';
import { ProcessModule } from './process/process.module';
import { DepartmentModule } from './department/department.module';
import { DatabaseModule } from './database.module';

import { StepModule } from './step/step.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [DatabaseModule, ProcessModule, DepartmentModule, StepModule],
  providers: [AppService],
  controllers: [AppController]
})
export class AppModule {}
