import { Module } from '@nestjs/common';
import { ModulXService } from './modul-x.service';
import { ModulXController } from './modul-x.controller';

@Module({
  controllers: [ModulXController],
  providers: [ModulXService]
})
export class ModulXModule {}
