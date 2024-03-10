import { Injectable, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './department.entity';
import { Repository } from 'typeorm';
import { DepartmentDto } from './dto/departmentDto';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private repository: Repository<Department>
  ) {}

  async create(departmentDto: DepartmentDto): Promise<Department> {
    return await this.repository.save(departmentDto);
  }

  async findAll(): Promise<Department[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<Department> {
    return await this.repository.findOneBy({ id: id });
  }

  async update(
    id: number,
    updateDepartmentDto: DepartmentDto
  ): Promise<Department> {
    await this.repository.update(id, updateDepartmentDto);
    return await this.repository.findOneBy({ id: id });
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
