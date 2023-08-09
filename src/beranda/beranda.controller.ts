import { Controller, Get } from '@nestjs/common';
import { BerandaService } from './beranda.service';
import { Beranda } from './entities/beranda.entity';

@Controller('beranda')
export class BerandaController {
  constructor(private readonly berandaService: BerandaService) {}

  @Get()
  findAll(): Promise<Beranda[]> {
    return this.berandaService.findAll();
  }
}
