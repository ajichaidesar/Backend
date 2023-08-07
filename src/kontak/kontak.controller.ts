import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { KontakService } from './kontak.service';

@Controller('kontaks')
export class KontakController {
  constructor(private readonly kontakService: KontakService) {}

  @Get()
  getAllKontaks() {
    return this.kontakService.getAllKontaks();
  }

  @Get(':id')
  getKontakById(@Param('id', ParseIntPipe) id: number) {
    return this.kontakService.getKontakById(id);
  }

  @Post()
  createKontak(@Body() data: any) {
    return this.kontakService.createKontak(data);
  }
}
