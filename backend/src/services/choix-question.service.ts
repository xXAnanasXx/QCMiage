import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ChoixQuestion} from "../entities/choix-question.entity";
import {ChoixQuestionDto} from "../dto/choix-question.dto";

@Injectable()
export class ChoixQuestionService {
    constructor(@InjectRepository(ChoixQuestion) private readonly choixQuestionRepository: Repository<ChoixQuestion>) {
    }

    async findOne(id: number): Promise<ChoixQuestionDto> {
        const choixQuestion = await this.choixQuestionRepository.findOne({
            where: {id_choixquestion: id},
        });
        if (!choixQuestion) {
            throw new Error('ChoixQuestion non trouvée');
        }
        return {
            id_choixquestion: choixQuestion.id_choixquestion,
            contenu: choixQuestion.contenu,
            estcorrecte: choixQuestion.estcorrecte,
            id_question: choixQuestion.id_question as any,
        };
    }

    async getAll(): Promise<ChoixQuestion[]> {
        return this.choixQuestionRepository.find();
    }

    choixQuestionEntityToDto(choixQuestion: ChoixQuestion | null): ChoixQuestionDto {
        if (!choixQuestion) {
            return null;
        }
        return {
            id_choixquestion: choixQuestion.id_choixquestion,
            contenu: choixQuestion.contenu,
            estcorrecte: choixQuestion.estcorrecte,
            id_question: choixQuestion.id_question as any,
        };
    }

    choixQuestionListEntityToDto(choixQuestions: ChoixQuestion[] | null): ChoixQuestionDto[] {
        if (!choixQuestions || choixQuestions.length === 0) {
            return [];
        }
        return choixQuestions.map(choixQuestion => this.choixQuestionEntityToDto(choixQuestion));
    }
}