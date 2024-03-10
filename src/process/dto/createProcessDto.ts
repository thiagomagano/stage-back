import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateProcessDto {
  @IsNotEmpty()
  readonly name: string;

  readonly description: string;

  @IsInt()
  readonly departmentId: number;
}
