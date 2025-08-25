import {Classe} from './classe.model';

export class Promotion {
  id_promotion: number;
  nom: string;
  annee: number;
  classes?: Classe[];

  constructor(
    id_promotion: number,
    nom: string,
    annee: number,
    classes: Classe[] = []
  ) {
    this.id_promotion = id_promotion;
    this.nom = nom;
    this.annee = annee;
    this.classes = classes;
  }
}
