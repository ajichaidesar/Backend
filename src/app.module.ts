import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config';

import { Album } from './album/entities/album.entity';
import { AlbumModule } from './album/album.module';
import { Artikel } from './artikel/entities/artikel.entity';
import { ArtikelModule } from './artikel/artikel.module';
import { ArunaSdc } from './aruna_sdc/entities/aruna_sdc.entity';
import { ArunaSdcModule } from './aruna_sdc/aruna_sdc.module';
import { Beranda } from './beranda/entities/beranda.entity';
import { BerandaModule } from './beranda/beranda.module';
import { CardH2 } from './card_h2/entities/card_h2.entity';
import { CardH2Module } from './card_h2/card_h2.module';
import { CardH21Module } from './card_h21/card_21.module';
import { CardH21 } from './card_h21/entities/card_h21.entity';
import { Galery } from './galery/entities/galery.entity';
import { GaleryModule } from './galery/galery.module';
import { Info } from './info/entities/info.entity';
import { InfoModule } from './info/info.module';
import { Kontak } from './kontak/entities/kontak.entity';
import { KontakModule } from './kontak/kontak.module';
import { Kurikulum } from './kurikulum/entities/kurikulum.entity';
import { KurikulumModule } from './kurikulum/kurikulum.module';
import { Layanan } from './layanan/entities/layanan.entity';
import { LayananModule } from './layanan/layanan.module';
import { Pesan } from './pesan/entities/pesan.entity';
import { PesanModule } from './pesan/pesan.module';
import { Program } from './program/entities/program.entity';
import { ProgramModule } from './program/program.module';
import { Question } from './question/entities/question.entity';
import { QuestionModule } from './question/question.module';
import { Registrasi } from './registrasi/entities/registrasi.entity';
import { RegistrasiModule } from './registrasi/registrasi.module';
import { RumahArunaModule } from './rumah_aruna/rumah_aruna.module';
import { RumahAruna } from './rumah_aruna/entities/rumah_aruna.entity';




@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PW,
      database: process.env.DB_NAME,
      entities: [ Album, Artikel, ArunaSdc, Beranda, CardH2, CardH21, 
                  Galery, Info, Kontak, Kurikulum, Layanan, 
                  Pesan, Program, Question, Registrasi, RumahAruna, ], 
      synchronize: false, 
    }),
    AlbumModule,
    ArtikelModule,
    ArunaSdcModule,
    BerandaModule,
    CardH2Module,
    CardH21Module,
    GaleryModule,
    InfoModule,
    KontakModule,
    KurikulumModule,
    LayananModule,
    PesanModule,
    ProgramModule,
    QuestionModule,
    RegistrasiModule, 
    RumahArunaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
