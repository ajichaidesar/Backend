import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Registrasis } from './entities/registrasi.entity';

@Injectable()
export class RegistrasiService {
  constructor(
    @InjectRepository(Registrasis)
    private readonly registrasiRepository: Repository<Registrasis>,
  ) {}

  async createRegistrasi(data: Partial<Registrasis>): Promise<Registrasis> {
    return this.registrasiRepository.save(data);
  }

  async findAllRegistrasi(): Promise<Registrasis[]> {
    return this.registrasiRepository.find();
  }

  async findRegistrasiById(id: number): Promise<Registrasis> {
    const registrasi = await this.registrasiRepository.findOne({ where: { id } }); // use the where property
    if (!registrasi) {
      throw new NotFoundException('Registrasi not found');
    }
    return registrasi;
  }
  
}
