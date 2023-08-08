import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registrasi } from './entities/registrasi.entity';
import { RegistrasiService } from './registrasi.service';
import { RegistrasiController } from './registrasi.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Registrasi])],
  providers: [RegistrasiService],
  controllers: [RegistrasiController],
})
export class RegistrasiModule {}
