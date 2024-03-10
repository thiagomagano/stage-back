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
import { Process } from './process.entity';
import { CreateProcessDto } from './dto/createProcessDto';
import { UpdateProcessDto } from './dto/updateProcessDto';

@Controller('process')
export class ProcessController {
  constructor(private readonly service: ProcessService) {}

  @Post('new')
  create(@Body() processDto: CreateProcessDto): Promise<Process> {
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
    @Body() dto: UpdateProcessDto
  ): Promise<Process> {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}
