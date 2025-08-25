import {Utilisateur} from './utilisateur.model';
import {Promotion} from './promotion.model';

export class Classe {
  id_classe: number;
  nom: string;
  id_promotion: Promotion;
  eleves?: Utilisateur[];

  constructor(
    id_classe: number,
    nom: string,
    id_promotion: Promotion,
    eleves: Utilisateur[] = []
  ) {
    this.id_classe = id_classe;
    this.nom = nom;
    this.id_promotion = id_promotion;
    this.eleves = eleves;
  }
}
