import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RumahAruna } from './entities/rumah_aruna.entity';
import { RumahArunaController } from './rumah_aruna.controller';
import { RumahArunaService } from './rumah_aruna.service';

@Module({
  imports: [TypeOrmModule.forFeature([RumahAruna])],
  controllers: [RumahArunaController],
  providers: [RumahArunaService],
})
export class RumahArunaModule {}
