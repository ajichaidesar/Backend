import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('files_related_morphs')
export class Album {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'file_id', type: 'int', nullable: true })
  fileId: number;

  @Column({ name: 'related_id', type: 'int', nullable: true })
  relatedId: number;

  @Column({ name: 'related_type', type: 'varchar', length: 255, nullable: true })
  relatedType: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  field: string;

  @Column({ type: 'double', unsigned: true, nullable: true })
  order: number;
}
