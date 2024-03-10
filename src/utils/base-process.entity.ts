import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'processes' })
export abstract class BaseProcess {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;
}
