import { Module } from '@nestjs/common';

import { Department } from './department.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Process } from '../process/process.entity';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Department, Process])],
  exports: [TypeOrmModule],
  controllers: [DepartmentController],
  providers: [DepartmentService]

})
export class DepartmentModule {}
