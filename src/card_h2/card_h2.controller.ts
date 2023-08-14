import { Controller, Get } from '@nestjs/common';
import { CardH2Service } from './card_h2.service';

@Controller('card-h2')
export class CardH2Controller {
  constructor(private readonly cardH2Service: CardH2Service) {}

  @Get()
  async findAllWithImages() {
    return this.cardH2Service.findWithImg();
  }
}
