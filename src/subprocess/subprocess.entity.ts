import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Process } from "../process/process.entity";


@Entity({name: 'subprocess'})
export class Subprocess {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
  @ManyToOne(() => Process, (process) => process.subprocesses)
    process: Process;
}