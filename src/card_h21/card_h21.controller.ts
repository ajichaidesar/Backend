import { Controller, Get } from '@nestjs/common';
import { CardH21Service } from './card_h21.service';
import { CardH21 } from './entities/card_h21.entity';

@Controller('cardh21')
export class CardH21Controller {
  constructor(private readonly cardH21Service: CardH21Service) {}

  @Get()
  async findAllWithImages(): Promise<CardH21[]> {
    return this.cardH21Service.findWithImg();
  }
}
