import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LayananController } from './layanan.controller';
import { LayananService } from './layanan.service';
import { Layanan } from './entities/layanan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Layanan])],
  controllers: [LayananController],
  providers: [LayananService],
})
export class LayananModule {}