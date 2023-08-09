import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'components_halaman_kurikulum_kurikulums' })
export class Kurikulum {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  judul: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  subjudul: string;

  @Column({ type: 'longtext', nullable: true })
  deskripsi: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  subjudul_2: string;

  @Column({ type: 'longtext', nullable: true })
  deskripsi_2: string;
}
