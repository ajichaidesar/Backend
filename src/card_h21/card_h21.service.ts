import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CardH21 } from './entities/card_h21.entity'; // Sesuaikan dengan path ke entitas Anda

@Injectable()
export class CardH21Service {
  constructor(
    @InjectRepository(CardH21)
    private cardH21Repository: Repository<CardH21>,
  ) {}

  async findAll(): Promise<CardH21[]> {
    return this.cardH21Repository.find();
  }

  
}
