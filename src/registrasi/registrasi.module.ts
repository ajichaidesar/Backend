import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registrasis } from './entities/registrasi.entity';
import { RegistrasiService } from './registrasi.service';
import { RegistrasiController } from './registrasi.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Registrasis])],
  providers: [RegistrasiService],
  controllers: [RegistrasiController],
})
export class RegistrasiModule {}
