import {Utilisateur} from './utilisateur.model';

export class SessionQuestionnaire {
  id_sessionquestionnaire: number;
  date: Date;
  duree?: number;
  statut: string;
  id_administrateur: Utilisateur;

  constructor(
    id_sessionquestionnaire: number,
    date: Date,
    statut: string,
    id_administrateur: Utilisateur,
    duree?: number
  ) {
    this.id_sessionquestionnaire = id_sessionquestionnaire;
    this.date = date;
    this.duree = duree;
    this.statut = statut;
    this.id_administrateur = id_administrateur;
  }
}
