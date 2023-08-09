import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config';
import { QuestionModule } from './question/question.module';
import { Artikel } from './artikel/entities/artikel.entity';
import { Galery } from './galery/entities/galery.entity';
import { ArtikelModule } from './artikel/artikel.module';
import { GaleryModule } from './galery/galery.module';
import { Info } from './info/entities/info.entity';
import { InfoModule } from './info/info.module';
import { Kontak } from './kontak/entities/kontak.entity';
import { KontakModule } from './kontak/kontak.module';
import { Layanan } from './layanan/entities/layanan.entity';
import { LayananModule } from './layanan/layanan.module';
import { Pesan } from './pesan/entities/pesan.entity';
import { PesanModule } from './pesan/pesan.module';
import { Program } from './program/entities/program.entity';
import { ProgramsModule } from './program/program.module';
import { Question } from './question/entities/question.entity';
import { Registrasi } from './registrasi/entities/registrasi.entity';
import { RegistrasiModule } from './registrasi/registrasi.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PW,
      database: process.env.DB_NAME,
      entities: [ Artikel, Galery, Info, Kontak, Layanan, Pesan, Program, Question, Registrasi,], 
      synchronize: false, 
    }),
    ArtikelModule,
    GaleryModule,
    InfoModule,
    KontakModule,
    LayananModule,
    PesanModule,
    ProgramsModule,
    QuestionModule,
    RegistrasiModule, 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
