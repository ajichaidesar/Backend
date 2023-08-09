import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Layanan } from './entities/layanan.entity';

@Injectable()
export class LayananService {
  constructor(
    @InjectRepository(Layanan)
    private readonly layananRepository: Repository<Layanan>,
  ) {}

  async getAllLayanans(): Promise<Layanan[]> {
    return this.layananRepository.find();
  }

  async getById(id: number): Promise<Layanan> {
    const layanan = await this.layananRepository.findOne({ where: { id: id } });
    if (!layanan) {
      throw new NotFoundException('Layanan not found');
    }
    return layanan;
  }

  async create(layananData: Layanan): Promise<Layanan> {
    const layanan = new Layanan();
    layanan.judul = layananData.judul;
    layanan.descripsi = layananData.descripsi;
    layanan.created_at = new Date();
    layanan.updated_at = new Date();
    return this.layananRepository.save(layanan);
  }
}
