import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Layanan } from './entities/layanan.entity';

@Injectable()
export class LayananService {
  constructor(
    @InjectRepository(Layanan)
    private readonly layananRepository: Repository<Layanan>,
  ) {}

  async getAll(): Promise<Layanan[]> {
    return this.layananRepository.find();
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