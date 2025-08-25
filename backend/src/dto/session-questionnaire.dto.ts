import {UtilisateurDto} from "./utilisateur.dto";

export class SessionQuestionnaireDto {
    id_sessionquestionnaire: number;
    date: Date;
    duree?: number;
    statut: string;
    id_administrateur: UtilisateurDto;
}