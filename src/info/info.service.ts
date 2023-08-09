import { Injectable, NotFoundException } from '@nestjs/common';
import { Info } from './entities/info.entity';

@Injectable()
export class InfoService {
  private readonly info: Info[] = [];

  getAllInfo() {
    return this.info;
  }

  getInfoById(id: number) {
    const info = this.info.find((info) => info.id === id);
    if (!info) {
      throw new NotFoundException('Information not found');
    }
    return info;
  }

  createInfo(data: any) {
    const info = new Info();
    info.Judul_info = data.Judul_info;
    info.Descripsi_info = data.Descripsi_info;
    info.Icon_info = data.Icon_info;
    this.info.push(info);
    return info;
  }
}
