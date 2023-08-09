import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kontak } from './entities/kontak.entity';
import { KontakService } from './kontak.service';
import { KontakController } from './kontak.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Kontak])],
  providers: [KontakService],
  controllers: [KontakController],
})
export class KontakModule {}
