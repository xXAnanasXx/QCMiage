import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import { Question } from './question.entity';

@Entity('choixquestion')
export class ChoixQuestion {
  @PrimaryGeneratedColumn()
  id_choixquestion: number;

  @Column({ type: 'text' })
  contenu: string;

  @Column()
  estcorrecte: boolean;

  @ManyToOne(() => Question, (question) => question.choixquestions)
  @JoinColumn({ name: 'id_question' })
  id_question: Question;
}