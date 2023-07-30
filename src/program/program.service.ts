import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Program } from './entities/program.entity';

@Injectable()
export class ProgramsService {
  constructor(
    @InjectRepository(Program)
    private programsRepository: Repository<Program>,
  ) {}

  async getAllPrograms(): Promise<Program[]> {
    return this.programsRepository.find();
  }

  async createProgram(data: Partial<Program>): Promise<Program> {
    const program = this.programsRepository.create(data);
    return this.programsRepository.save(program);
  }
}
