import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'kontaks' }) // Mengatur nama tabel menjadi 'kontaks'
export class Kontak {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'json', nullable: true }) // Menggunakan tipe 'json' untuk field media
  Image: {
    url: string;
    type: string;
  };

  @Column({ nullable: true })
  Alamat_Anda: string;

  @Column({ nullable: true })
  Email: string;

  @Column({ nullable: true })
  Instagram: string;

  @Column({ nullable: true })
  Facebook: string;

  @Column({ nullable: true })
  Twitter: string;

  @Column({ nullable: true })
  Maps: string;

  @Column({ nullable: true })
  Kontak_Anda: number;
}
