import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Galery } from './entities/galery.entity';

@Injectable()
export class GaleryService {
  constructor(
    @InjectRepository(Galery)
    private galeryRepository: Repository<Galery>,
  ) {}

  async findAll(): Promise<Galery[]> {
    return this.galeryRepository.find();
  }
}
