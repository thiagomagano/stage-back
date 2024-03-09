import { Module } from '@nestjs/common';
import { ProcessService } from './process.service';
import { ProcessController } from './process.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Process } from './process.entity';
import { Subprocess } from '../subprocess/subprocess.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Process, Subprocess])],
  controllers: [ProcessController],
  providers: [ProcessService],
})
export class ProcessModule {}
