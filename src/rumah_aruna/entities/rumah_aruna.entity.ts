import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('rumah_arunas')
  export class RumahAruna {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 255, nullable: true })
    judul: string;
  
    @Column({ type: 'longtext', nullable: true })
    deskripsi: string;
  
    @Column({ type: 'longtext', nullable: true })
    visi: string;
  
    @Column({ type: 'longtext', nullable: true })
    misi: string;
  
    @Column({ type: 'longtext', nullable: true })
    filosofi: string;
  
    @CreateDateColumn({ type: 'datetime', precision: 6, nullable: true })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'datetime', precision: 6, nullable: true })
    updated_at: Date;
  
    @Column({ type: 'datetime', precision: 6, nullable: true })
    published_at: Date;
  
    @Column({ type: 'int', nullable: true })
    created_by_id: number;
  
    @Column({ type: 'int', nullable: true })
    updated_by_id: number;
  }
  