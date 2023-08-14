import { Controller, Get, Param } from '@nestjs/common';
import { ArtikelService } from './artikel.service';

@Controller('artikel')
export class ArtikelController {
  constructor(private readonly artikelService: ArtikelService) {}

  @Get()
  async getAllWithImages() {
    return this.artikelService.findWithImg();
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    return this.artikelService.findOne(id);
  }
}
