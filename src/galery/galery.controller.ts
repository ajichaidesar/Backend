import { Controller, Get, Post, Body } from '@nestjs/common';
import { GaleriesService } from './galery.service';

@Controller('galeries')
export class GaleriesController {
  constructor(private readonly galeriesService: GaleriesService) {}

  @Get()
  async getAllGaleries() {
    return this.galeriesService.getAllGaleries();
  }

  @Post()
  async createGalery(@Body() data: { Image_galery: any, AltTeks: string }) {
    return this.galeriesService.createGalery(data);
  }
}
