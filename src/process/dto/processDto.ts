import { IsInt, IsNotEmpty } from 'class-validator';

export class ProcessDto {
  @IsNotEmpty()
  readonly name: string;

  readonly description: string;

  @IsNotEmpty()
  @IsInt()
  readonly departmentId: number;

  @IsInt()
  readonly parentId: number;
}
