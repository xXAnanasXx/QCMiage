import {ChoixQuestion} from './choix-question.model';
import {Questionnaire} from './questionnaire.model';

export class Question {
  id_question: number;
  typequestion: string;
  contenu: string;
  bareme: number;
  penalite: number;
  feedback?: string;
  id_questionnaire: Questionnaire;
  choixquestions?: ChoixQuestion[];

  constructor(
    id_question: number,
    typequestion: string,
    contenu: string,
    bareme: number,
    penalite: number,
    id_questionnaire: Questionnaire,
    feedback: string = '',
    choixquestions: ChoixQuestion[] = []
  ) {
    this.id_question = id_question;
    this.typequestion = typequestion;
    this.contenu = contenu;
    this.bareme = bareme;
    this.penalite = penalite;
    this.feedback = feedback;
    this.id_questionnaire = id_questionnaire;
    this.choixquestions = choixquestions;
  }
}
