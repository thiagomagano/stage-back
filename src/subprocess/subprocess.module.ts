import { Module } from '@nestjs/common';
import { SubprocessService } from './subprocess.service';
import { SubprocessController } from './subprocess.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Process } from '../process/process.entity';
import { Subprocess } from './subprocess.entity';

@Module({
 
  imports: [TypeOrmModule.forFeature([Subprocess, Process])],
  controllers: [SubprocessController],
  providers: [SubprocessService],
})
export class SubprocessModule {}
