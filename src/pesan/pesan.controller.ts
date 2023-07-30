import { Controller, Get, Post, Body } from '@nestjs/common';
import { Pesans } from './entities/pesan.entity';
import { PesanService } from './pesan.service';

@Controller('pesan')
export class PesanController {
  constructor(private readonly pesanService: PesanService) {}

  @Get()
  async getAllPesan(): Promise<Pesans[]> {
    return this.pesanService.getAllPesan();
  }

  @Post()
  async createPesan(@Body() pesanData: Pesans): Promise<Pesans> {
    return this.pesanService.createPesan(pesanData);
  }
}
