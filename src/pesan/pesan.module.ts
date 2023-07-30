// pesan.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pesans } from './entities/pesan.entity';
import { PesanController } from './pesan.controller';
import { PesanService } from './pesan.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pesans])],
  controllers: [PesanController],
  providers: [PesanService],
})
export class PesanModule {}
