import { IsNotEmpty, IsString } from 'class-validator';

//Consider Refact
export class DepartmentDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;
}
