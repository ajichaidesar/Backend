import { Controller, Get } from '@nestjs/common';
import { ArunaSdcService } from './aruna_sdc.service';
import { ArunaSdc } from './entities/aruna_sdc.entity';

@Controller('aruna-sdc')
export class ArunaSdcController {
  constructor(private readonly arunaSdcService: ArunaSdcService) {}

  @Get()
  async findAll(): Promise<ArunaSdc[]> {
    return this.arunaSdcService.findAll();
  }
}
