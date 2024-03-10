import { PartialType } from '@nestjs/mapped-types';
import { CreateProcessDto } from './createProcessDto';

export class UpdateProcessDto extends PartialType(CreateProcessDto) {}
