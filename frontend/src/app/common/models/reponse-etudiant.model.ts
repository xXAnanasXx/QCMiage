export class ReponseEtudiant {
  id_reponseetudiant: number;
  reponselibre?: string;
  id_sessionetudiant: number;

  constructor(
    id_reponseetudiant: number,
    reponselibre: string = '',
    id_sessionetudiant: number
  ) {
    this.id_reponseetudiant = id_reponseetudiant;
    this.reponselibre = reponselibre;
    this.id_sessionetudiant = id_sessionetudiant;
  }
}
