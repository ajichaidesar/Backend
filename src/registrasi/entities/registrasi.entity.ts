import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Registrasis {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Nama_lengkap: string;

  @Column()
  Email: string;

  @Column()
  Telp: string;
}
