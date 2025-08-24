import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Questionnaire } from './questionnaire.entity';
import { ChoixQuestion } from './choix-question.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  typeQuestion: string;

  @Column({ type: 'text' })
  contenu: string;

  @Column({ type: 'float' })
  bareme: number;

  @Column({ type: 'float' })
  penalite: number;

  @Column({ type: 'text', nullable: true })
  feedback: string;

  @ManyToOne(() => Questionnaire, (questionnaire) => questionnaire.questions)
  questionnaire: Questionnaire;

  @OneToMany(() => ChoixQuestion, (choix) => choix.question)
  choixQuestions: ChoixQuestion[];
}