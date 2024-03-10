import { Module } from '@nestjs/common';
import { ProcessModule } from './process/process.module';
import { DepartmentModule } from './department/department.module';
import { DatabaseModule } from './database.module';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { StepProcessModule } from './stepProcess/stepProcess.module';

@Module({
  imports: [DatabaseModule, ProcessModule, DepartmentModule, StepProcessModule],
  providers: [AppService],
  controllers: [AppController]
})
export class AppModule {}
