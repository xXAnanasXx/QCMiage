import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {SessionQuestionnaire} from "../entities/session-questionnaire.entity";
import {SessionQuestionnaireDto} from "../dto/session-questionnaire.dto";
import {QuestionnaireService} from "./questionnaire.service";
import {UtilisateurService} from "./utilisateur.service";

@Injectable()
export class SessionQuestionnaireService {
    constructor(@InjectRepository(SessionQuestionnaire) private readonly sessionQuestionnaireRepository: Repository<SessionQuestionnaire>,
                private readonly questionnaireService: QuestionnaireService,
                private readonly utilisateurService: UtilisateurService) {
    }

    async findOne(id: number): Promise<SessionQuestionnaireDto> {
        const sessionQuestionnaire = await this.sessionQuestionnaireRepository.findOne({
            where: {id_sessionquestionnaire: id},
            relations: ['id_administrateur'],
        });
        if (!sessionQuestionnaire) {
            throw new Error('Session questionnaire non trouvée');
        }
        return this.sessionQuestionnaireEntityToDto(sessionQuestionnaire);
    }

    async getAll(): Promise<SessionQuestionnaire[]> {
        return this.sessionQuestionnaireRepository.find();
    }

    sessionQuestionnaireEntityToDto(sessionQuestionnaire: SessionQuestionnaire): SessionQuestionnaireDto {
        if (!sessionQuestionnaire) {
            return null;
        }
        return {
            id_sessionquestionnaire: sessionQuestionnaire.id_sessionquestionnaire,
            date: sessionQuestionnaire.date,
            duree: sessionQuestionnaire.duree,
            statut: sessionQuestionnaire.statut,
            id_administrateur: this.utilisateurService.utilisateurEntityToDto(sessionQuestionnaire.id_administrateur),
        };
    }

    sessionQuestionnaireListEntityToDto(sessions: SessionQuestionnaire[]): SessionQuestionnaireDto[] {
        if (!sessions || sessions.length === 0) {
            return [];
        }
        return sessions.map(session => this.sessionQuestionnaireEntityToDto(session));
    }
}