import { Column, Entity, ManyToOne } from 'typeorm';
import { Process } from '../process/process.entity';
import { BaseProcess } from '../utils/base-process.entity';

@Entity('steps')
export class StepProcess extends BaseProcess {
  @Column({ name: 'prev_id' })
  prev: number;

  @ManyToOne(() => Process, (process) => process.steps)
  parent: number;
}
