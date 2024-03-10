import { IsInt, IsNotEmpty } from 'class-validator';

export class ProcessDto {
  @IsNotEmpty()
  readonly name: string;

  readonly description: string;
  readonly startTrigger: string;
  readonly endTrigger: string;

  @IsNotEmpty()
  @IsInt()
  readonly departmentId: number;
}
