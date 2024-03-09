import { Module } from '@nestjs/common';
import { AreaService } from './area.service';
import { AreaController } from './area.controller';
import { Area } from './area.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Process } from '../process/process.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Area, Process])],
  controllers: [AreaController],
  providers: [AreaService],
})
export class AreaModule {}
