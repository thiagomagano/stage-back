import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne
} from 'typeorm';
import { Subprocess } from '../subprocess/subprocess.entity';
import { Area } from '../area/area.entity';

@Entity({ name: 'process' })
export class Process {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Area, (area) => area.processes)
  area: Area;

  @OneToMany(() => Subprocess, (subprocess) => subprocess.process)
  subprocesses: Subprocess[];
}
