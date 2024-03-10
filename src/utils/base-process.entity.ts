import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Department } from '../department/department.entity';

@Entity({ name: 'processes' })
export abstract class BaseProcess {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Department, (department) => department.processes)
  department: Department;
}
