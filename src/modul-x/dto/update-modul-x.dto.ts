import { PartialType } from '@nestjs/mapped-types';
import { CreateModulXDto } from './create-modul-x.dto';

export class UpdateModulXDto extends PartialType(CreateModulXDto) {}
