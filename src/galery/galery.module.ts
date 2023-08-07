import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GaleriesController } from './galery.controller';
import { GaleriesService } from './galery.service';
import { Galeries } from './entities/galery.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Galeries])],
  controllers: [GaleriesController],
  providers: [GaleriesService],
})
export class GaleriesModule {}
