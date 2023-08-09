import { Controller, Get } from '@nestjs/common';
import { RumahArunaService } from './rumah_aruna.service';
import { RumahAruna } from './entities/rumah_aruna.entity';

@Controller('rumah-aruna')
export class RumahArunaController {
  constructor(private readonly rumahArunaService: RumahArunaService) {}

  @Get()
  async findAll(): Promise<RumahAruna[]> {
    return this.rumahArunaService.findAll();
  }
}
