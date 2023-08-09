import { Controller, Get, Post, Body } from '@nestjs/common';
import { Layanan } from './entities/layanan.entity';
import { LayananService } from './layanan.service';

@Controller('layanan')
export class LayananController {
  constructor(private readonly layananService: LayananService) {}

  @Get()
  async getAll() {
    return this.layananService.getAllLayanans();
  }

  @Post()
  async create(@Body() layananData: Layanan): Promise<Layanan> {
    return this.layananService.create(layananData);
  }
}