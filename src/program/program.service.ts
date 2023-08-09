import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Program } from './entities/program.entity';

@Injectable()
export class ProgramService {
  constructor(
    @InjectRepository(Program)
    private programRepository: Repository<Program>,
  ) {}

  async getAllProgram(): Promise<Program[]> {
    return this.programRepository.find();
  }

  async createProgram(data: Partial<Program>): Promise<Program> {
    const program = this.programRepository.create(data);
    return this.programRepository.save(program);
  }

  async getProgramById(id: number): Promise<Program> {
    const program = await this.programRepository.findOne({ where: { id } });

    if (!program) {
      throw new NotFoundException('Program not found');
    }
    return program;
  }
}
