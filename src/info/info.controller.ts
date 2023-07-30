import { Controller, Get, Post, Body } from '@nestjs/common';
import { InfosService } from './info.service';

@Controller('infos')
export class InfosController {
  constructor(private readonly infosService: InfosService) {}

  @Get()
  getAllInfos() {
    return this.infosService.getAllInfos();
  }

  @Post()
  createInfo(@Body() data: any) {
    return this.infosService.createInfo(data);
  }
}
