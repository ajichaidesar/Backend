import { Controller, Get } from '@nestjs/common';
import { BerandaService } from './beranda.service';

@Controller('beranda')
export class BerandaController {
  constructor(private readonly berandaService: BerandaService) {}

  @Get()
  async findAllWithImages() {
    return this.berandaService.findWithImg();
  }
}
