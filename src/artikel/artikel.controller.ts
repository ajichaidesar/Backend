import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Artikels } from './entities/artikel.entity';
import { ArtikelService } from './artikel.service';

@Controller('artikel')
export class ArtikelController {
  constructor(private readonly artikelService: ArtikelService) {}

  @Get()
  getAllArtikel(): Promise<Artikels[]> {
    return this.artikelService.getAllArtikel();
  }

  @Get(':id')
  getArtikelById(@Param('id') id: number): Promise<Artikels> {
    return this.artikelService.getArtikelById(id);
  }

  @Post()
  createArtikel(@Body() artikelData: Artikels): Promise<Artikels> {
    return this.artikelService.createArtikel(artikelData);
  }
}
