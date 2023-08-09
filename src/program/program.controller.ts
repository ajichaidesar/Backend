import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { ProgramsService } from './program.service';
import { Program } from './entities/program.entity';

@Controller('program')
export class ProgramsController {
  constructor(private readonly programsService: ProgramsService) {}

  @Get()
  async getAllPrograms(): Promise<Program[]> {
    return this.programsService.getAllPrograms();
  }

  @Post()
  async createProgram(@Body() data: Partial<Program>): Promise<Program> {
    return this.programsService.createProgram(data);
  }

  @Get(':id')
  async getProgramById(@Param('id') id: number): Promise<Program> {
    try {
      return this.programsService.getProgramById(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException('Program not found');
      }
      throw error;
    }
  }
}
