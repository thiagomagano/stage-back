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
  create(@Body() departmentDto: DepartmentDto): Promise<Department> {
    return this.service.create(departmentDto);
  }

  @Get()
  findAll(): Promise<Department[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOneById(@Param('id', ParseIntPipe) id: number): Promise<Department> {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() departmentDto: DepartmentDto
  ): Promise<Department> {
    return this.service.update(id, departmentDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}
