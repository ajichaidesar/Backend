import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { GaleriesService } from './galery.service';

@Controller('galeries')
export class GaleriesController {
  constructor(private readonly galeriesService: GaleriesService) {}

  @Get()
  async getAllGaleries() {
    return this.galeriesService.getAllGaleries();
  }

  @Get(':id')
  async getGaleryById(@Param('id', ParseIntPipe) id: number) {
    return this.galeriesService.getGaleryById(id);
  }

  @Post()
  async createGalery(@Body() data: { Image_galery: any; AltTeks: string }) {
    return this.galeriesService.createGalery(data);
  }
}
