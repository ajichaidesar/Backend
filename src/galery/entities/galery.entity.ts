import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'galeries' }) // Mengatur nama tabel menjadi 'galeries'
export class Galery {
  static map(arg0: (galery: any) => any) {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'Image_galery', nullable: false, type: 'json' }) // Menggunakan tipe 'json' untuk field media
  Image_galery: {
    url: string;
    type: string;
  };

  @Column({ name: 'AltTeks', nullable: false, length: 255 }) // Menyesuaikan panjang menjadi 255
  AltTeks: string;

}
