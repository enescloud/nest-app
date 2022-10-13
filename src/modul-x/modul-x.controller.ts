import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModulXService } from './modul-x.service';
import { CreateModulXDto } from './dto/create-modul-x.dto';
import { UpdateModulXDto } from './dto/update-modul-x.dto';

@Controller('modul-x')
export class ModulXController {
  constructor(private readonly modulXService: ModulXService) {}

  @Post()
  create(@Body() createModulXDto: CreateModulXDto) {
    return this.modulXService.create(createModulXDto);
  }

  @Get()
  findAll() {
    return this.modulXService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modulXService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModulXDto: UpdateModulXDto) {
    return this.modulXService.update(+id, updateModulXDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modulXService.remove(+id);
  }
}
