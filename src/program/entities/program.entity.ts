// src/programs/program.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'programs' }) // Mengatur nama tabel menjadi 'programs'
export class Program {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  judul: string;

  @Column({ type: 'text', nullable: true })
  deskripsi: string;

  @Column({ type: 'datetime', precision: 6, nullable: true })
  created_at: Date;

  @Column({ type: 'datetime', precision: 6, nullable: true })
  updated_at: Date;

  @Column({ type: 'datetime', precision: 6, nullable: true })
  published_at: Date;

  @Column({ type: 'int', nullable: true })
  created_by_id: number;

  @Column({ type: 'int', nullable: true })
  updated_by_id: number;
}
