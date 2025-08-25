import {SessionEtudiantDto} from "./session-etudiant.dto";

export class ReponseEtudiantDto {
    id_reponseetudiant: number;
    reponselibre?: string;
    id_sessionetudiant: SessionEtudiantDto;
}