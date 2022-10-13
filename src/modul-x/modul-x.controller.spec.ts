import { Test, TestingModule } from '@nestjs/testing';
import { ModulXController } from './modul-x.controller';
import { ModulXService } from './modul-x.service';

describe('ModulXController', () => {
  let controller: ModulXController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModulXController],
      providers: [ModulXService],
    }).compile();

    controller = module.get<ModulXController>(ModulXController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
