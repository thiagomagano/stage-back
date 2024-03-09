import { Module } from '@nestjs/common';
import { ProcessService } from './process.service';
import { ProcessController } from './process.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Process } from './process.entity';
import { Subprocess } from '../subprocess/subprocess.entity';
import { Area } from '../area/area.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Process, Area, Subprocess])],
  controllers: [ProcessController],
  providers: [ProcessService]
})
export class ProcessModule {}
