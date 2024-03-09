import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Department } from '../department/department.entity';
import { Process } from '../process/process.entity';

@Entity({ name: 'steps' })
export class Step {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  stepNumber: number;

  @ManyToOne(() => Process, (process) => process.steps)
  process: Process;
}
