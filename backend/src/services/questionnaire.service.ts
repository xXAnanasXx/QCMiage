import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Questionnaire} from "../entities/questionnaire.entity";
import {QuestionnaireDto} from "../dto/questionnaire.dto";
import {QuestionService} from "./question.service";

@Injectable()
export class QuestionnaireService {
    constructor(@InjectRepository(Questionnaire) private readonly questionnaireRepository: Repository<Questionnaire>,
                private readonly questionService: QuestionService) {
    }

    async findOne(id: number): Promise<QuestionnaireDto> {
        const questionnaire = await this.questionnaireRepository.findOne({
            where: {id_questionnaire: id},
            relations: ['questions'],
        });
        if (!questionnaire) {
            throw new Error('Questionnaire non trouvé');
        }
        return this.questionnaireEntityToDto(questionnaire);
    }

    async getAll(): Promise<Questionnaire[]> {
        return this.questionnaireRepository.find();
    }

    questionnaireEntityToDto(questionnaire: Questionnaire | null): QuestionnaireDto {
        if (!questionnaire) {
            return null;
        }
        return {
            id_questionnaire: questionnaire.id_questionnaire,
            titre: questionnaire.titre,
            description: questionnaire.description || '',
            duree: questionnaire.duree,
            questions: this.questionService.questionListEntityToDto(questionnaire.questions),
        };
    }

    questionnaireListEntityToDto(questionnaires: Questionnaire[] | null): QuestionnaireDto[] {
        if (!questionnaires || questionnaires.length === 0) {
            return [];
        }
        return questionnaires.map(questionnaire => this.questionnaireEntityToDto(questionnaire));
    }
}