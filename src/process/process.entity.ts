import { Entity, OneToMany } from 'typeorm';

import { StepProcess } from '../step-process/step-process.entity';
import { BaseProcess } from '../utils/base-process.entity';

@Entity({ name: 'processes' })
export class Process extends BaseProcess {
  @OneToMany(() => StepProcess, (step) => step.parentId)
  steps: StepProcess[];
}
