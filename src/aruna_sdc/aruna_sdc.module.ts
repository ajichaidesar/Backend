import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArunaSdc } from './entities/aruna_sdc.entity';
import { ArunaSdcController } from './aruna_sdc.controller';
import { ArunaSdcService } from './aruna_sdc.service';

@Module({
  imports: [TypeOrmModule.forFeature([ArunaSdc])],
  controllers: [ArunaSdcController],
  providers: [ArunaSdcService],
})
export class ArunaSdcModule {}
