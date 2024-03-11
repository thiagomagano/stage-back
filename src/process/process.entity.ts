import { Entity, JoinTable, ManyToOne, OneToMany } from 'typeorm';

import { StepProcess } from '../step-process/step-process.entity';
import { BaseProcess } from '../utils/base-process.entity';
import { Department } from '../department/department.entity';

@Entity({ name: 'processes' })
export class Process extends BaseProcess {
  @ManyToOne(() => Department, (department) => department.processes)
  department: Department;

  @OneToMany(() => StepProcess, (step) => step.parent, { eager: true })
  @JoinTable()
  steps: StepProcess[];
}
