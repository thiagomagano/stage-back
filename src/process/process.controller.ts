import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put
} from '@nestjs/common';
import { ProcessService } from './process.service';
import { ProcessDto } from './dto/processDto';
import { Process } from './process.entity';

@Controller('process')
export class ProcessController {
  constructor(private readonly service: ProcessService) {}

  @Post()
  create(@Body() processDto: ProcessDto): Promise<Process> {
    return this.service.create(processDto);
  }

  @Get()
  findAll(): Promise<Process[]> {
    return this.service.findAll();
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Process> {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() processDto: ProcessDto
  ): Promise<Process> {
    return this.update(id, processDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.service.remove(id);
  }
}
