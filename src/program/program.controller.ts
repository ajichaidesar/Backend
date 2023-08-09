import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { ProgramService } from './program.service';
import { Program } from './entities/program.entity';

@Controller('program')
export class ProgramController {
  constructor(private readonly programService: ProgramService) {}

  @Get()
  async getAllProgram(): Promise<Program[]> {
    return this.programService.getAllProgram();
  }

  @Post()
  async createProgram(@Body() data: Partial<Program>): Promise<Program> {
    return this.programService.createProgram(data);
  }

  @Get(':id')
  async getProgramById(@Param('id') id: number): Promise<Program> {
    try {
      return this.programService.getProgramById(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException('Program not found');
      }
      throw error;
    }
  }
}
