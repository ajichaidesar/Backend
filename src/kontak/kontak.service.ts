import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kontak } from './entities/kontak.entity';

@Injectable()
export class KontakService {
  constructor(
    @InjectRepository(Kontak)
    private kontakRepository: Repository<Kontak>,
  ) {}

  async findFirst(): Promise<Kontak | undefined> {
    const kontaks = await this.kontakRepository.find({
      take: 1, // Ambil hanya 1 hasil
    });
    
    return kontaks.length > 0 ? kontaks[0] : undefined;
  }
}
