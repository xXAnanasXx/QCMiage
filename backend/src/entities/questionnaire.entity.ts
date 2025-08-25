import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Question } from './question.entity';

@Entity()
export class Questionnaire {
  @PrimaryGeneratedColumn()
  id_questionnaire: number;

  @Column({ length: 200 })
  titre: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ nullable: true })
  duree: number;

  @OneToMany(() => Question, (question) => question.id_questionnaire, { cascade: true })
  questions: Question[];
}