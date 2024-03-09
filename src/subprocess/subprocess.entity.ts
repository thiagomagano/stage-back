import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { Process } from '../process/process.entity';


Entity()
export class Subprocess {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

   @ManyToOne((type) => Process, (process) => process.subprocess)
   process: Process;

}
