import { Controller, Get, Post, Body } from '@nestjs/common';
import { Layanan } from './entities/layanan.entity';
import { LayananService } from './layanan.service';

@Controller('layanans')
export class LayananController {
  constructor(private readonly layananService: LayananService) {}

  @Get()
  async getAll(): Promise<Layanan[]> {
    return this.layananService.getAll();
  }

  @Post()
  async create(@Body() layananData: Layanan): Promise<Layanan> {
    return this.layananService.create(layananData);
  }
}