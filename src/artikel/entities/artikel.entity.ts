import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'artikels' }) // Mengatur nama tabel menjadi 'artikels'
export class Artikel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'judul', type: 'varchar', length: 255 }) // Menggunakan tipe 'varchar' dengan panjang maksimum 255
  judul: string;

  @Column({ name: 'deskripsi', type: 'text' }) 
  deskripsi: string;

  @Column({ name: 'image', type: 'text', nullable: true }) 
  image: string; 
}
