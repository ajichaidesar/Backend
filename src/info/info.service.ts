import { Injectable } from '@nestjs/common';
import { Infos } from './entities/info.entity';

@Injectable()
export class InfosService {
  private readonly infos: Infos[] = [];

  getAllInfos() {
    return this.infos;
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
