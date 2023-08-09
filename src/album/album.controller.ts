import { Controller, Get, Param } from '@nestjs/common';
import { AlbumService } from './album.service'; // Sesuaikan dengan path yang benar

@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Get()
  async findAll() {
    return this.albumService.findAll();
  }

  
}
