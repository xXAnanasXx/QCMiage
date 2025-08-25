export class Utilisateur {
  id_utilisateur: number;
  nom: string;
  prenom: string;
  email?: string;
  role: string;

  constructor(
    id_utilisateur: number,
    nom: string,
    prenom: string,
    email: string = '',
    role: string
  ) {
    this.id_utilisateur = id_utilisateur;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.role = role;
  }
}
