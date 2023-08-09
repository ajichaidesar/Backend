import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('berandas')
export class Beranda {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  judul: string;

  @Column('longtext', { nullable: true })
  deskripsi: string;

  @Column({ nullable: true })
  link_url: string;

  @Column({ type: 'datetime', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)' })
  created_at: Date;

  @Column({ type: 'datetime', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)' })
  updated_at: Date;

  @Column({ type: 'datetime', precision: 6, nullable: true })
  published_at: Date;

  @Column({ type: 'int', unsigned: true, nullable: true })
  created_by_id: number;

  @Column({ type: 'int', unsigned: true, nullable: true })
  updated_by_id: number;
}
