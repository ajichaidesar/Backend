import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name : 'registrasis'})
export class Registrasi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Nama_lengkap: string;

  @Column()
  Email: string;

  @Column()
  Telp: string;
}
