import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateStepProcessDto {
  @IsString()
  readonly name: string;
  readonly description: string;
  readonly departmentId: number;

  @IsNotEmpty()
  @IsInt()
  readonly prevStepId: number;

  @IsNotEmpty()
  @IsInt()
  readonly parentId: number;
}
