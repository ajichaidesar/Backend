import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artikel } from './entities/artikel.entity';
import { ArtikelController } from './artikel.controller';
import { ArtikelService } from './artikel.service';

@Module({
  imports: [TypeOrmModule.forFeature([Artikel])],
  controllers: [ArtikelController],
  providers: [ArtikelService],
})
export class ArtikelModule {}
