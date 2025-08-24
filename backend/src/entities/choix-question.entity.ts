import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Question } from './question.entity';

@Entity()
export class ChoixQuestion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  contenu: string;

  @Column()
  estCorrecte: boolean;

  @ManyToOne(() => Question, (question) => question.choixQuestions)
  question: Question;
}