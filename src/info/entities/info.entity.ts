import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'infos' }) // Mengatur nama tabel menjadi 'infos'
export class Infos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'Judul_info', nullable: false })
  Judul_info: string;

  @Column({ name: 'Descripsi_info', nullable: false })
  Descripsi_info: string;

  @Column({ name: 'Icon_info', nullable: false, type: 'json' }) // Menggunakan tipe 'json' untuk field media
  Icon_info: {
    url: string;
    type: string;
  };
}
