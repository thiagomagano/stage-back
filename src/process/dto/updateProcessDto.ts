import { PartialType } from '@nestjs/mapped-types';
import { CreateProcessDto } from './createProcessDto';

export class UpdateStepProcessDto extends PartialType(CreateProcessDto) {}
