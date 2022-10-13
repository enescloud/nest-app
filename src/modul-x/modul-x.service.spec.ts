import { Test, TestingModule } from '@nestjs/testing';
import { ModulXService } from './modul-x.service';

describe('ModulXService', () => {
  let service: ModulXService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModulXService],
    }).compile();

    service = module.get<ModulXService>(ModulXService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
