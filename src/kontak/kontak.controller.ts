import { Controller, Get, Post, Body } from '@nestjs/common';
import { KontakService } from './kontak.service';

@Controller('kontaks')
export class KontakController {
  constructor(private readonly kontakService: KontakService) {}

  @Get()
  getAllKontaks() {
    return this.kontakService.getAllKontaks();
  }

  @Post()
  createKontak(@Body() data: any) {
    return this.kontakService.createKontak(data);
  }
}
