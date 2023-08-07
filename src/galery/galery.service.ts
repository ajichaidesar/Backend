import { Injectable, NotFoundException } from '@nestjs/common';
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

  async getGaleryById(id: number) {
    const galery = await this.galeriesRepository.findOne({ where: { id: id } });

    if (!galery) {
      throw new NotFoundException('Gallery not found');
    }
    return galery;
  }

  async createGalery(data: { Image_galery: any; AltTeks: string }) {
    const galery = this.galeriesRepository.create(data);
    return this.galeriesRepository.save(galery);
  }
}
