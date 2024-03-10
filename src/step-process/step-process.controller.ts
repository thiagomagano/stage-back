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
import { UpdateStepProcessDto } from '../process/dto/updateProcessDto';

@Controller('step-process')
export class StepProcessController {
  @Post('new')
  create(@Body() dto: CreateStepProcessDto) {
    return 'this creates a step-process';
  }
  @Get()
  findAll() {
    return 'this return all step-process';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `this return one id: ${id}`;
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateStepProcessDto) {
    return `this update one step-process: ${id}`;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return `this remove one id: ${id}`;
  }
}
