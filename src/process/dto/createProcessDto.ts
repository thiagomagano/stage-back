import { IsNotEmpty } from 'class-validator';

export class CreateProcessDto {
  @IsNotEmpty()
  readonly name: string;

  readonly description: string;

  readonly department: number;
}
