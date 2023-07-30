import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Artikels } from './entities/artikel.entity';

@Injectable()
export class ArtikelService {
  constructor(
    @InjectRepository(Artikels)
    private readonly artikelRepository: Repository<Artikels>,
  ) {}

  getAllArtikel(): Promise<Artikels[]> {
    return this.artikelRepository.find();
  }

  createArtikel(artikelData: Artikels): Promise<Artikels> {
    const artikel = this.artikelRepository.create(artikelData);
    return this.artikelRepository.save(artikel);
  }
}
