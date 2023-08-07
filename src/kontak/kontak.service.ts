import { Injectable, NotFoundException } from '@nestjs/common';
import { Kontak } from './entities/kontak.entity';

@Injectable()
export class KontakService {
  private readonly kontaks: Kontak[] = [];

  getAllKontaks() {
    return this.kontaks;
  }

  getKontakById(id: number) {
    const kontak = this.kontaks.find((kontak) => kontak.id === id);
    if (!kontak) {
      throw new NotFoundException('Contact not found');
    }
    return kontak;
  }

  createKontak(data: any) {
    const kontak = new Kontak();
    kontak.Image = data.Image;
    kontak.Alamat_Anda = data.Alamat_Anda;
    kontak.Email = data.Email;
    kontak.Instagram = data.Instagram;
    kontak.Facebook = data.Facebook;
    kontak.Twitter = data.Twitter;
    kontak.Maps = data.Maps;
    kontak.Kontak_Anda = data.Kontak_Anda;
    this.kontaks.push(kontak);
    return kontak;
  }
}
