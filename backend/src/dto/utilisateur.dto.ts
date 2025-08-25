export class UtilisateurDto {
    id_utilisateur: number;
    mdp: string;
    nom: string;
    prenom: string;
    email?: string;
    role: string;
}