import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Beranda } from './entities/beranda.entity';

@Injectable()
export class BerandaService {
  constructor(
    @InjectRepository(Beranda)
    private readonly berandaRepository: Repository<Beranda>,
  ) {}

  async findAll(): Promise<Beranda[]> {
    return this.berandaRepository.find();
  }
}
