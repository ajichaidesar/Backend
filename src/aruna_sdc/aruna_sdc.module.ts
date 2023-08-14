import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArunaSdc } from './entities/aruna_sdc.entity';
import { ArunaSdcService } from './aruna_sdc.service';
import { ArunaSdcController } from './aruna_sdc.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ArunaSdc]), // Menambahkan entitas ke dalam modul
  ],
  providers: [ArunaSdcService], // Menyediakan layanan
  controllers: [ArunaSdcController], // Menyediakan controller
})
export class ArunaSdcModule {}
