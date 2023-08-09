import { Controller, Get } from '@nestjs/common';
import { ArtikelService } from './artikel.service';
import { Artikel } from './entities/artikel.entity';

@Controller('blog')
export class ArtikelController {
  constructor(private readonly artikelService: ArtikelService) {}

  @Get()
  async getBlogArticles(): Promise<Artikel[]> {
    return this.artikelService.findAll();
  }
}

@Controller('news')
export class NewsPageController {
  constructor(private readonly artikelService: ArtikelService) {}

  @Get()
  async getNewsArticles(): Promise<Artikel[]> {
    return this.artikelService.findAll();
  }
}
