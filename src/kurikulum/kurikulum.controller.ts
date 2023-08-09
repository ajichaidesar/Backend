import { Controller, Get } from '@nestjs/common';
import { KurikulumService } from './kurikulum.service';
import { Kurikulum } from './entities/kurikulum.entity';

@Controller('kurikulum')
export class KurikulumController {
  constructor(private readonly kurikulumService: KurikulumService) {}

  @Get()
  async findAll(): Promise<Kurikulum[]> {
    return this.kurikulumService.findAll();
  }
}
