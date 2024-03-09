import { IsNotEmpty, IsString } from 'class-validator';

export class DepartmentDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;
}
