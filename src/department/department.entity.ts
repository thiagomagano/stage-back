import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Process } from '../process/process.entity';

@Entity({ name: 'departments' })
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => Process, (process) => process.department)
  processes: Process[];
}
