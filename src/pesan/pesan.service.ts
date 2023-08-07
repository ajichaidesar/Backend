import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pesan } from './entities/pesan.entity';
import { UpdatePesanDto } from './pesan.dto';

@Injectable()
export class PesanService {
  constructor(
    @InjectRepository(Pesan)
    private readonly pesanRepository: Repository<Pesan>,
  ) {}

  async getAllPesans(): Promise<Pesan[]> {
    return this.pesanRepository.find();
  }

  async createPesan(data: Partial<Pesan>): Promise<Pesan> {
    const pesan = this.pesanRepository.create(data);
    return this.pesanRepository.save(pesan);
  }
}
