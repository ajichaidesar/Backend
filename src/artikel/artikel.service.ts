import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Artikel } from './entities/artikel.entity';

@Injectable()
export class ArtikelService {
  constructor(
    @InjectRepository(Artikel)
    private artikelRepository: Repository<Artikel>,
  ) {}

  async findAll(): Promise<Artikel[]> {
    return this.artikelRepository.find();
  }
}
