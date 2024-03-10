import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateProcessDto {
  @IsNotEmpty()
  readonly name: string;

  readonly description: string;

  @IsNotEmpty()
  @IsInt()
  readonly departmentId: number;
}
