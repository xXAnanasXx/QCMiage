export class Utilisateur {
  id_utilisateur: number;
  mdp: string;
  nom: string;
  prenom: string;
  email?: string;
  role: string;

  constructor(
    id_utilisateur: number = 0,
    mdp: string,
    nom: string,
    prenom: string,
    email: string = '',
    role: string
  ) {
    this.id_utilisateur = id_utilisateur;
    this.mdp = mdp;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.role = role;
  }
}
