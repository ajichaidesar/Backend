import { Controller, Get } from '@nestjs/common';
import { KontakService } from './kontak.service';
import { Kontak } from './entities/kontak.entity';

@Controller('kontak')
export class KontakController {
  constructor(private readonly kontakService: KontakService) {}

  @Get()
  async findOne(): Promise<Kontak | undefined> {
    return this.kontakService.findFirst();
  }
}
