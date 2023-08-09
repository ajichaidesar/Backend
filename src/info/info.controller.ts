import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { InfoService } from './info.service';

@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Get()
  getAllInfos() {
    return this.infoService.getAllInfo();
  }

  @Get(':id')
  getInfoById(@Param('id', ParseIntPipe) id: number) {
    return this.infoService.getInfoById(id);
  }

  @Post()
  createInfo(@Body() data: any) {
    return this.infoService.createInfo(data);
  }
}
