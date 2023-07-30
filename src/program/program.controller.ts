import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProgramsService } from './program.service';
import { Program } from './entities/program.entity';

@Controller('programs')
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
}
