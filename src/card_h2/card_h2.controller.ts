import { Controller, Get, Query } from '@nestjs/common';
import { CardH2Service } from './card_h2.service';
import { CardH2 } from './entities/card_h2.entity';

@Controller('card-h2')
export class CardH2Controller {
  constructor(private readonly cardH2Service: CardH2Service) {}

  @Get()
  async findAll(): Promise<CardH2[]> {
    return this.cardH2Service.findAll();
  }

  @Get('search')
  async findByCustomField(@Query('customField') customField: string): Promise<CardH2[]> {
    return this.cardH2Service.findByCustomField(customField);
  }
}
