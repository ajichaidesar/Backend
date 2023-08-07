import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Program } from './entities/program.entity';
import { ProgramsService } from './program.service';
import { ProgramsController } from './program.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Program])],
  providers: [ProgramsService],
  controllers: [ProgramsController],
})
export class ProgramsModule {}
