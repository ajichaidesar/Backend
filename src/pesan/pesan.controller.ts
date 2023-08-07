// pesan.controller.ts

import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PesanService } from './pesan.service';
import { Pesan } from './entities/pesan.entity';
import { CreatePesanDto, UpdatePesanDto } from './pesan.dto';

@Controller('pesan')
export class PesanController {
  constructor(private readonly pesanService: PesanService) {}

  @Get()
  async getAllQuestions(): Promise<Pesan[]> {
    return this.pesanService.getAllPesans();
  }

  @Post()
  async createPesan(@Body() data: Partial<Pesan>): Promise<Pesan> {
    return this.pesanService.createPesan(data);
  }

}
