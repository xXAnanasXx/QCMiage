import {UtilisateurDto} from "./utilisateur.dto";
import {SessionQuestionnaireDto} from "./session-questionnaire.dto";

export class SessionEtudiantDto {
    id_sessionetudiant: number;
    pertefocus: number;
    id_sessionquestionnaire: SessionQuestionnaireDto;
    id_etudiant: UtilisateurDto;
}