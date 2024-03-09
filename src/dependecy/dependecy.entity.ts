import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Subprocess } from '../subprocess/subprocess.entity';

@Entity({ name: 'subprocess_dependecies' })
export class Dependecy {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Subprocess)
  depentendSubprocess: Subprocess;

  @ManyToOne(() => Subprocess)
  prerequisiteSubProcess: Subprocess;
}
