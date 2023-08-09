import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardH2 } from './entities/card_h2.entity';
import { CardH2Service } from './card_h2.service';
import { CardH2Controller } from './card_h2.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CardH2])],
  providers: [CardH2Service],
  controllers: [CardH2Controller],
})
export class CardH2Module {}
