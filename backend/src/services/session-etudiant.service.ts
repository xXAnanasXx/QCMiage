import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {SessionEtudiant} from "../entities/session-etudiant.entity";
import {SessionEtudiantDto} from "../dto/session-etudiant.dto";
import {UtilisateurService} from "./utilisateur.service";
import {SessionQuestionnaireService} from "./session-questionnaire.service";

@Injectable()
export class SessionEtudiantService {
    constructor(@InjectRepository(SessionEtudiant) private readonly sessionEtudiantRepository: Repository<SessionEtudiant>,
                private readonly utilisateurService: UtilisateurService,
                private readonly sessionQuestionnaireService: SessionQuestionnaireService) {
    }

    async findOne(id: number): Promise<SessionEtudiantDto> {
        const sessionEtudiant = await this.sessionEtudiantRepository.findOne({
            where: {id_sessionetudiant: id},
            relations: ['id_etudiant', 'id_sessionquestionnaire'],
        });
        if (!sessionEtudiant) {
            throw new Error('Session étudiant non trouvée');
        }
        return this.sessionEtudiantEntityToDto(sessionEtudiant);
    }

    async getAll(): Promise<SessionEtudiant[]> {
        return this.sessionEtudiantRepository.find();
    }

    sessionEtudiantEntityToDto(sessionEtudiant: SessionEtudiant | null): SessionEtudiantDto {
        if (!sessionEtudiant) {
            return null;
        }
        return {
            id_sessionetudiant: sessionEtudiant.id_sessionetudiant,
            pertefocus: sessionEtudiant.pertefocus,
            id_etudiant: this.utilisateurService.utilisateurEntityToDto(sessionEtudiant.id_etudiant),
            id_sessionquestionnaire: this.sessionQuestionnaireService.sessionQuestionnaireEntityToDto(sessionEtudiant.id_sessionquestionnaire),
        };
    }

    sessionEtudiantListEntityToDto(sessions: SessionEtudiant[] | null): SessionEtudiantDto[] {
        if (!sessions || sessions.length === 0) {
            return [];
        }
        return sessions.map(session => this.sessionEtudiantEntityToDto(session));
    }
}