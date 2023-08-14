import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('artikels')
export class Artikel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  judul: string;

  @Column({ type: 'longtext', nullable: true })
  deskripsi: string;

  @CreateDateColumn({ type: 'datetime', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)' })
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)' })
  updated_at: Date;

  @Column({ type: 'datetime', precision: 6, nullable: true })
  published_at: Date;

  @Column({ type: 'int', unsigned: true, nullable: true })
  created_by_id: number;

  @Column({ type: 'int', unsigned: true, nullable: true })
  updated_by_id: number;
}
