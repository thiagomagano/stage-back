import { PartialType } from '@nestjs/mapped-types';
import { CreateStepProcessDto } from './createStepProcessDto';

export class UpdateStepProcessDto extends PartialType(CreateStepProcessDto) {}
