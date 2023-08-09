import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArunaSdc } from './entities/aruna_sdc.entity';

@Injectable()
export class ArunaSdcService {
  constructor(
    @InjectRepository(ArunaSdc)
    private readonly arunaSdcRepository: Repository<ArunaSdc>,
  ) {}

  async findAll(): Promise<ArunaSdc[]> {
    return this.arunaSdcRepository.find();
  }
}
