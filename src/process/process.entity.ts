import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne
} from 'typeorm';

import { Department } from '../department/department.entity';
import { Step } from '../step/step.entity';

@Entity({ name: 'process' })
export class Process {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  startTrigger: string;

  @Column()
  endTrigger: string;

  @ManyToOne(() => Department, (department) => department.processes)
  department: Department;

  @OneToMany(() => Step, (step) => step.process)
  steps: Step[];
}
