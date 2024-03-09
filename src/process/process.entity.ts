import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Subprocess } from '../subprocess/subprocess.entity';

@Entity({name: 'process'})
export class Process {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany((type) => Subprocess, (subprocess) => subprocess.process)
  subprocess: Subprocess[];
}
