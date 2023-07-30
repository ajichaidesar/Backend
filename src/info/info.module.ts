import { Module } from '@nestjs/common';
import { InfosController } from './info.controller';
import { InfosService } from './info.service';

@Module({
  controllers: [InfosController],
  providers: [InfosService],
})
export class InfosModule {}
