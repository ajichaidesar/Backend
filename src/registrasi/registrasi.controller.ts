import { Body, Controller, Get, Post } from '@nestjs/common';
import { Registrasi } from './entities/registrasi.entity';
import { RegistrasiService } from './registrasi.service';

@Controller('registrasi')
export class RegistrasiController {
  constructor(private readonly registrasiService: RegistrasiService) {}

  @Get()
  async getAllRegistrasis(): Promise<Registrasi[]> {
    return this.registrasiService.getAllRegistrasi();
  }

  @Post()
  async createQuestion(@Body() data: Partial<Registrasi>): Promise<Registrasi> {
    return this.registrasiService.createRegistrasi(data);
  }
}

