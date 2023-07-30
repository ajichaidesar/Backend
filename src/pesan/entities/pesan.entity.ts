import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Pesans {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'Nama_lengkap', length: 100 })
  namaLengkap: string;

  @Column({ unique: true, length: 100 })
  email: string;

  @Column({ name: 'Telp', length: 15 })
  telp: string;

  @Column({ type: 'text' })
  pesan: string;
}
