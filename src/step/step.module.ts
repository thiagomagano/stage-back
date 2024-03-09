import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Process } from '../process/process.entity';
import { Step } from './step.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Process, Step])],
  providers: [],
  controllers: []
})
export class StepModule {}
