import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RumahAruna } from './entities/rumah_aruna.entity';

@Injectable()
export class RumahArunaService {
  constructor(
    @InjectRepository(RumahAruna)
    private readonly rumahArunaRepository: Repository<RumahAruna>,
  ) {}

  async findAll(): Promise<RumahAruna[]> {
    return this.rumahArunaRepository.find();
  }
}
