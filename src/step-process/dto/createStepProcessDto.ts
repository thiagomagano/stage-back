import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateStepProcessDto {
  @IsString()
  readonly name: string;
  readonly description: string;

  readonly prev: number;

  @IsNotEmpty()
  @IsInt()
  readonly parent: number;
}
