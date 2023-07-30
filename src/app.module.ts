import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config';
import { Artikels } from './artikel/entities/artikel.entity';
import { ArtikelModule } from './artikel/artikel.module';
import { Galeries } from './galery/entities/galery.entity';
import { GaleriesModule } from './galery/galery.module';
import { Infos } from './info/entities/info.entity';
import { InfosModule } from './info/info.module';
import { Kontak } from './kontak/entities/kontak.entity';
import { KontakModule } from './kontak/kontak.module';
import { Layanan } from './layanan/entities/layanan.entity';
import { LayananModule } from './layanan/layanan.module';
import { Pesans } from './pesan/entities/pesan.entity';
import { PesanModule } from './pesan/pesan.module';
import { Program } from './program/entities/program.entity';
import { ProgramsModule } from './program/program.module';
import { Questions } from './question/entities/question.entity';
import { QuestionModule } from './question/question.module';

import { RegistrasiModule } from './registrasi/registrasi.module';
import { Registrasis } from './registrasi/entities/registrasi.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PW,
      database: process.env.DB_NAME,
      entities: [Artikels, Galeries, Infos, Kontak, Layanan, Pesans, Program, Questions, Registrasis, ],
      synchronize: false,
    }),

    ArtikelModule,
    GaleriesModule,
    InfosModule,
    KontakModule,
    LayananModule,
    PesanModule,
    ProgramsModule,
    QuestionModule,
    RegistrasiModule,

    ],
    
    
  
})
export class AppModule {}
