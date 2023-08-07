import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artikels } from './entities/artikel.entity';
import { ArtikelController } from './artikel.controller';
import { ArtikelService } from './artikel.service';

@Module({
  imports: [TypeOrmModule.forFeature([Artikels])],
  controllers: [ArtikelController],
  providers: [ArtikelService],
})
export class ArtikelModule {}
