import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Galeries } from './entities/galery.entity';

@Injectable()
export class GaleriesService {
  constructor(
    @InjectRepository(Galeries)
    private readonly galeriesRepository: Repository<Galeries>,
  ) {}

  async getAllGaleries() {
    return this.galeriesRepository.find();
  }

  async createGalery(data: { Image_galery: any, AltTeks: string }) {
    const galery = this.galeriesRepository.create(data);
    return this.galeriesRepository.save(galery);
  }
}
