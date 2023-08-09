import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kurikulum } from './entities/kurikulum.entity';

@Injectable()
export class KurikulumService {
  constructor(
    @InjectRepository(Kurikulum)
    private readonly kurikulumRepository: Repository<Kurikulum>,
  ) {}

  async findAll(): Promise<Kurikulum[]> {
    return await this.kurikulumRepository.find();
  }
}
