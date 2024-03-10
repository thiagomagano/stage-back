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
import { CreateStepProcessDto } from './dto/createStepProcessDto';
import { UpdateStepProcessDto } from '../step-process/dto/updateStepProcessDto';
import { StepProcessService } from './step-process.service';
import { StepProcess } from './step-process.entity';

@Controller('step-process')
export class StepProcessController {
  constructor(private readonly service: StepProcessService) {}

  @Post('new')
  async create(@Body() dto: CreateStepProcessDto): Promise<StepProcess> {
    return await this.service.create(dto);
  }
  @Get()
  async findAll(): Promise<StepProcess[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<StepProcess> {
    return this.service.findOne(id);
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateStepProcessDto
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
