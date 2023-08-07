import { Body, Controller, Get, Param, Post, NotFoundException } from '@nestjs/common';
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

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Registrasis> {
    try {
      return this.registrasiService.findRegistrasiById(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException('Registrasi not found');
      }
      throw error;
    }
  }
}
