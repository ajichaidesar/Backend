import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { InfosService } from './info.service';

@Controller('infos')
export class InfosController {
  constructor(private readonly infosService: InfosService) {}

  @Get()
  getAllInfos() {
    return this.infosService.getAllInfos();
  }

  @Get(':id')
  getInfoById(@Param('id', ParseIntPipe) id: number) {
    return this.infosService.getInfoById(id);
  }

  @Post()
  createInfo(@Body() data: any) {
    return this.infosService.createInfo(data);
  }
}
