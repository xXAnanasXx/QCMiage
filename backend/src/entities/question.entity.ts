import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn} from 'typeorm';
import { Questionnaire } from './questionnaire.entity';
import { ChoixQuestion } from './choix-question.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id_question: number;

  @Column({ length: 20 })
  typequestion: string;

  @Column({ type: 'text' })
  contenu: string;

  @Column({ type: 'float' })
  bareme: number;

  @Column({ type: 'float' })
  penalite: number;

  @Column({ type: 'text', nullable: true })
  feedback: string;

  @ManyToOne(() => Questionnaire, (questionnaire) => questionnaire.questions)
  @JoinColumn({ name: 'id_questionnaire' })
  id_questionnaire: Questionnaire;

  @OneToMany(() => ChoixQuestion, (choix) => choix.id_question, { cascade: true })
  choixquestions: ChoixQuestion[];
}