import { PartialType } from '@nestjs/mapped-types';
import { CreateStepProcessDto } from './createStepProcessDto';

export class UpdateProcessDto extends PartialType(CreateStepProcessDto) {}
