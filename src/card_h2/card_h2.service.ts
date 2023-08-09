import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { CardH2 } from './entities/card_h2.entity';

@Injectable()
export class CardH2Service {
  constructor(
    @InjectRepository(CardH2)
    private readonly cardH2Repository: Repository<CardH2>,
  ) {}

  async findAll(): Promise<CardH2[]> {
    return this.cardH2Repository.find();
  }

  async findByCustomField(customField: any): Promise<CardH2[]> {
    const queryBuilder = getRepository(CardH2).createQueryBuilder('card');

    if (customField) {
      queryBuilder.where('card.customField = :customField', { customField });
    }

    return queryBuilder.getMany();
  }
}
