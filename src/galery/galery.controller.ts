import { Controller, Get } from '@nestjs/common';
import { GaleryService } from './galery.service';
import { Galery } from './entities/galery.entity';

@Controller('galery')
export class GaleryController {
  constructor(private readonly galeryService: GaleryService) {}

  @Get()
  async getGaleriesWithImages(): Promise<Galery[]> {
    return this.galeryService.findWithImg();
  }
}
