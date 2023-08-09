import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'pesans'})
export class Pesan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nama_lengkap', length: 100, nullable: true })
  namaLengkap: string | null;

  @Column({ unique: true, length: 255, nullable: true })
  email: string | null;

  @Column({ name: 'telp', length: 15, nullable: true })
  telp: string | null;

  @Column({ type: 'text', nullable: true })
  pesan: string | null;
}
