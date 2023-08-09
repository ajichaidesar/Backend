import { Controller, Get } from '@nestjs/common';
import { GaleryService } from './galery.service';
import { Galery } from './entities/galery.entity';

@Controller('galery') // Ganti 'galeries' menjadi 'galery'
export class GaleryController {
  constructor(private readonly galeryService: GaleryService) {}

  @Get()
  async findAll(): Promise<Galery[]> {
    return this.galeryService.findAll();
  }
}
