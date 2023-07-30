import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Registrasis } from './entities/registrasi.entity';
import { RegistrasiRepository } from './registrasi.repository';

@Injectable()
export class RegistrasiService {
  constructor(
    @InjectRepository(Registrasis)
    private registrasiRepository: RegistrasiRepository,
  ) {}

  async createRegistrasi(data: Partial<Registrasis>): Promise<Registrasis> {
    return this.registrasiRepository.save(data);
  }

  async findAllRegistrasi(): Promise<Registrasis[]> {
    return this.registrasiRepository.find();
  }
}
