import { Injectable } from '@nestjs/common';
import { CreateModulXDto } from './dto/create-modul-x.dto';
import { UpdateModulXDto } from './dto/update-modul-x.dto';

@Injectable()
export class ModulXService {
  create(createModulXDto: CreateModulXDto) {
    return 'This action adds a new modulX';
  }

  findAll() {
    return `This action returns all modulX`;
  }

  findOne(id: number) {
    return `This action returns a #${id} modulX`;
  }

  update(id: number, updateModulXDto: UpdateModulXDto) {
    return `This action updates a #${id} modulX`;
  }

  remove(id: number) {
    return `This action removes a #${id} modulX`;
  }
}
