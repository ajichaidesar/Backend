import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardH21 } from './entities/card_h21.entity'; // Sesuaikan dengan path ke entitas Anda
import { CardH21Service } from './card_h21.service';
import { CardH21Controller } from './card_h21.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CardH21])],
  providers: [CardH21Service],
  controllers: [CardH21Controller],
})
export class CardH21Module {}
