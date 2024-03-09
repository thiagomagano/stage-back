import { Body, Controller, Get, Param, ParseIntPipe, Post, Delete } from '@nestjs/common';
import { DepartmentDto } from './dto/departmentDto';
import { Department } from './department.entity';
import { DepartmentService } from './department.service';

@Controller('department')
export class DepartmentController {
    constructor(private readonly service: DepartmentService){}
    
    
    @Post()
    async create(@Body() DepartmentDto: DepartmentDto): Promise<Department>{
        return await this.service.create(DepartmentDto);
    }

    @Get()
    async findAll(): Promise<Department[]> {
        return await this.service.findAll();
    }

    @Get(':id')
    async findOneById(@Param('id', ParseIntPipe) id: number): Promise<Department> {
        return await this.service.findOne(id);
    }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.service.remove(id);
  }
}
