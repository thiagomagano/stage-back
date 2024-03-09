import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Area } from './area.entity';

@Injectable()
export class AreaService {
  constructor(
    @InjectRepository(Area)
    private areaRepository: Repository<Area>
  ) {}

  findAll(): Promise<Area[]> {
    return this.areaRepository.find();
  }

  findOne(id: number): Promise<Area | null> {
    return this.areaRepository.findOneBy({ id });
  }

  remove(id: number) {
    return this.areaRepository.delete(id);
  }
}
