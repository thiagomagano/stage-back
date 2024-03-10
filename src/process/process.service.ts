import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Process } from './process.entity';
import { Repository } from 'typeorm';
import { UpdateProcessDto } from './dto/updateProcessDto';
import { CreateProcessDto } from './dto/createProcessDto';

@Injectable()
export class ProcessService {
  constructor(
    @InjectRepository(Process) private repository: Repository<Process>
  ) {}

  async create(dto: CreateProcessDto): Promise<Process> {
    const toCreate = Object.assign(dto);
    return await this.repository.save(toCreate);
  }

  async findAll(): Promise<Process[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<Process> {
    return await this.repository.findOneBy({ id: id });
  }

  async update(id: number, dto: UpdateProcessDto): Promise<Process> {
    const toUpdate = await this.repository.findOneBy({ id: id });

    const updated = Object.assign(toUpdate, dto);

    return await this.repository.save(updated);
  }
  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async findAllSteps(): Promise<Process[]> {
    return [];
  }

  async findParents(): Promise<Process> {
    return undefined;
  }
}
