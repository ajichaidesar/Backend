import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pesans } from './entities/pesan.entity';

@Injectable()
export class PesanService {
  constructor(
    @InjectRepository(Pesans)
    private pesanRepository: Repository<Pesans>,
  ) {}

  async getAllPesan(): Promise<Pesans[]> {
    return this.pesanRepository.find();
  }

  async createPesan(pesanData: Pesans): Promise<Pesans> {
    const pesan = this.pesanRepository.create(pesanData);
    return this.pesanRepository.save(pesan);
  }
}
