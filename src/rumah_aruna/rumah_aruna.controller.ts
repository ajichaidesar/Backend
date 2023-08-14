import { Controller, Get } from '@nestjs/common';
import { RumahArunaService } from './rumah_aruna.service';

@Controller('rumah-aruna')
export class RumahArunaController {
  constructor(private readonly rumahArunaService: RumahArunaService) {}

  @Get()
  async getAllWithImages() {
    return this.rumahArunaService.findWithImg();
  }
}
