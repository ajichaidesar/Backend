import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kurikulum } from './entities/kurikulum.entity';
import { KurikulumService } from './kurikulum.service';
import { KurikulumController } from './kurikulum.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Kurikulum])],
  providers: [KurikulumService],
  controllers: [KurikulumController],
})
export class KurikulumModule {}
