import { Controller, Get, Param } from '@nestjs/common';
import { CardH21Service } from './card_h21.service';

@Controller('cardh21')
export class CardH21Controller {
  constructor(private cardH21Service: CardH21Service) {}

  @Get()
  async findAll() {
    return this.cardH21Service.findAll();
  }

}
