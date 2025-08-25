import {Question} from './question.model';

export class Questionnaire {
  id_questionnaire: number;
  titre: string;
  description?: string;
  duree: number;
  questions?: Question[];

  constructor(
    id_questionnaire: number,
    titre: string,
    duree: number,
    description: string = '',
    questions: Question[] = []
  ) {
    this.id_questionnaire = id_questionnaire;
    this.titre = titre;
    this.description = description;
    this.duree = duree;
    this.questions = questions;
  }
}
