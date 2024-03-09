import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Delete,
  Put
} from '@nestjs/common';
import { DepartmentDto } from './dto/departmentDto';
import { Department } from './department.entity';
import { DepartmentService } from './department.service';

@Controller('department')
export class DepartmentController {
  constructor(private readonly service: DepartmentService) {}

  @Post()
  async create(@Body() departmentDto: DepartmentDto): Promise<Department> {
    return await this.service.create(departmentDto);
  }

  @Get()
  async findAll(): Promise<Department[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOneById(
    @Param('id', ParseIntPipe) id: number
  ): Promise<Department> {
    return await this.service.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.service.remove(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() departmentDto: DepartmentDto
  ): Promise<Department> {
    return this.service.update(id, departmentDto);
  }
}
