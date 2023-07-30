import { Module } from '@nestjs/common';
import { KontakController } from './kontak.controller';
import { KontakService } from './kontak.service';

@Module({
  controllers: [KontakController],
  providers: [KontakService],
})
export class KontakModule {}
