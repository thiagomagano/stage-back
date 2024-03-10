import { Entity, OneToMany } from 'typeorm';

import { StepProcess } from '../stepProcess/stepProcess.entity';
import { BaseProcess } from '../entities/baseProcess.entity';

@Entity({ name: 'processes' })
export class Process extends BaseProcess {
  @OneToMany(() => StepProcess, (step) => step.parentId)
  steps: StepProcess[];
}
