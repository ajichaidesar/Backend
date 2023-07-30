import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Questions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pertanyaan: string;

  @Column()
  jawaban: string;
}
