import { Body, Controller, Get, Post } from '@nestjs/common';
import { Registrasis } from './entities/registrasi.entity';
import { RegistrasiService } from './registrasi.service';

@Controller('registrasi')
export class RegistrasiController {
  constructor(private readonly registrasiService: RegistrasiService) {}

  @Post()
  async create(@Body() data: Partial<Registrasis>): Promise<Registrasis> {
    return this.registrasiService.createRegistrasi(data);
  }

  @Get()
  async findAll(): Promise<Registrasis[]> {
    return this.registrasiService.findAllRegistrasi();
  }
}
