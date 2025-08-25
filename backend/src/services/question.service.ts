import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Question} from "../entities/question.entity";
import {QuestionDto} from "../dto/question.dto";
import {ChoixQuestionService} from "./choix-question.service";

@Injectable()
export class QuestionService {
    constructor(@InjectRepository(Question) private readonly questionRepository: Repository<Question>,
                private readonly choixQuestionService: ChoixQuestionService) {
    }

    async findOne(id: number): Promise<QuestionDto> {
        const question = await this.questionRepository.findOne({
            where: {id_question: id},
            relations: ['choixquestions', 'id_questionnaire'],
        });
        if (!question) {
            throw new Error('Question non trouvée');
        }
        return this.questionEntityToDto(question);
    }

    async getAll(): Promise<Question[]> {
        return this.questionRepository.find();
    }

    questionEntityToDto(question: Question): QuestionDto {
        if (!question) {
            return null;
        }
        return {
            id_question: question.id_question,
            typequestion: question.typequestion,
            contenu: question.contenu,
            bareme: question.bareme,
            penalite: question.penalite,
            feedback: question.feedback || '',
            id_questionnaire: question.id_questionnaire as any,
            choixquestions: this.choixQuestionService.choixQuestionListEntityToDto(question.choixquestions),
        };
    }

    questionListEntityToDto(questions: Question[] | null): QuestionDto[] {
        if (!questions || questions.length === 0) {
            return [];
        }
        return questions.map(question => this.questionEntityToDto(question));
    }
}