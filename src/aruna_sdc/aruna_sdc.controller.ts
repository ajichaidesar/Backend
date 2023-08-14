import { Controller, Get } from '@nestjs/common';
import { ArunaSdcService } from './aruna_sdc.service'; // Sesuaikan dengan path ke layanan Anda

@Controller('aruna-sdc')
export class ArunaSdcController {
  constructor(private readonly arunaSdcService: ArunaSdcService) {}

  @Get()
  async findAllWithImages() {
    try {
      const arunaSdcWithImages = await this.arunaSdcService.findWithImg();
      return arunaSdcWithImages;
    } catch (error) {
      // Tangani error jika terjadi masalah
      throw new Error('Failed to fetch ArunaSdc with images');
    }
  }
}
