import { Injectable, NotFoundException } from '@nestjs/common';
import { Infos } from './entities/info.entity';

@Injectable()
export class InfosService {
  private readonly infos: Infos[] = [];

  getAllInfos() {
    return this.infos;
  }

  getInfoById(id: number) {
    const info = this.infos.find((info) => info.id === id);
    if (!info) {
      throw new NotFoundException('Information not found');
    }
    return info;
  }

  createInfo(data: any) {
    const info = new Infos();
    info.Judul_info = data.Judul_info;
    info.Descripsi_info = data.Descripsi_info;
    info.Icon_info = data.Icon_info;
    this.infos.push(info);
    return info;
  }
}
