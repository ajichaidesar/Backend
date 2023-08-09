import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Beranda } from './entities/beranda.entity';
import { BerandaService } from './beranda.service';
import { BerandaController } from './beranda.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Beranda])],
  providers: [BerandaService],
  controllers: [BerandaController],
})
export class BerandaModule {}
