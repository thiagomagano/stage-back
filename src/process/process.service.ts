import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Process } from './process.entity';
import { Repository } from 'typeorm';
import { ProcessDto } from './dto/processDto';

@Injectable()
export class ProcessService {
  constructor(
    @InjectRepository(Process) private repository: Repository<Process>
  ) {}

  async create(@Body() processDto: ProcessDto): Promise<Process> {
    return await this.repository.save(processDto);
  }

  async findAll(): Promise<Process[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<Process> {
    return await this.repository.findOneBy({ id: id });
  }

  async update(id: number, processDto: ProcessDto): Promise<Process> {
    await this.repository.update(id, processDto);

    return this.repository.findOneBy({ id: id });
  }
  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async findAllSubProcess(): Promise<Process[]> {
    return [];
  }

  async findParents(): Promise<Process> {
    return undefined;
  }
}
