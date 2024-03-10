import { Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Process } from '../process/process.entity';
import { BaseProcess } from '../utils/base-process.entity';

@Entity('steps')
export class StepProcess extends BaseProcess {
  @OneToOne(() => StepProcess, (step) => step.id)
  @JoinColumn({ name: 'prev_step_id' })
  prev: number;

  @ManyToOne(() => Process, (process) => process.steps)
  parent: number;
}
