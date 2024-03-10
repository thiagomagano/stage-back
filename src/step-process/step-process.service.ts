import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StepProcess } from './step-process.entity';
import { Repository } from 'typeorm';
import { CreateStepProcessDto } from './dto/createStepProcessDto';
import { UpdateStepProcessDto } from '../step-process/dto/updateStepProcessDto';

@Injectable()
export class StepProcessService {
  constructor(
    @InjectRepository(StepProcess) private repository: Repository<StepProcess>
  ) {}

  async create(dto: CreateStepProcessDto): Promise<StepProcess> {
    return await this.repository.save(dto);
  }

  async findAll(): Promise<StepProcess[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<StepProcess> {
    return await this.repository.findOneBy({ id: id });
  }

  async update(id: number, dto: UpdateStepProcessDto): Promise<StepProcess> {
    const toUpdate = await this.repository.findOneBy({ id: id });
    const updated = Object.assign(toUpdate, dto);

    return this.repository.save(updated);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
