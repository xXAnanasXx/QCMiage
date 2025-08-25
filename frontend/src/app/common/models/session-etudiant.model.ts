import {Utilisateur} from './utilisateur.model';
import {SessionQuestionnaire} from './session-questionnaire.model';

export class SessionEtudiant {
  id_sessionetudiant: number;
  pertefocus: number;
  id_sessionquestionnaire: SessionQuestionnaire;
  id_etudiant: Utilisateur;

  constructor(
    id_sessionetudiant: number,
    pertefocus: number,
    id_sessionquestionnaire: SessionQuestionnaire,
    id_etudiant: Utilisateur
  ) {
    this.id_sessionetudiant = id_sessionetudiant;
    this.pertefocus = pertefocus;
    this.id_sessionquestionnaire = id_sessionquestionnaire;
    this.id_etudiant = id_etudiant;
  }
}
