import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Registrasi } from './entities/registrasi.entity';

@Injectable()
export class RegistrasiService {
  constructor(
    @InjectRepository(Registrasi)
    private readonly registrasiRepository: Repository<Registrasi>,
  ) {}

  async getAllRegistrasi(): Promise<Registrasi[]> {
    return this.registrasiRepository.find();
  }

  async createRegistrasi(data: Partial<Registrasi>): Promise<Registrasi> {
    const registrasi = this.registrasiRepository.create(data);
    return this.registrasiRepository.save(registrasi);
  }
}
