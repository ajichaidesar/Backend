import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity ({ name: 'questions'  }) 
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'created_at', type: 'datetime', precision: 6, default: null })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'datetime', precision: 6, default: null })
  updatedAt: Date;

  @Column({ name: 'published_at', type: 'datetime', precision: 6, default: null })
  publishedAt: Date;

  @Column({ name: 'created_by_id', type: 'int', unsigned: true, default: null })
  createdById: number;

  @Column({ name: 'updated_by_id', type: 'int', unsigned: true, default: null })
  updatedById: number;

  @Column({ name: 'pertanyaan', type: 'varchar', length: 255, default: null })
  pertanyaan: string;

  @Column({ name: 'jawaban', type: 'longtext', default: null })
  jawaban: string;
}
