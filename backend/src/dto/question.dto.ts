import {QuestionnaireDto} from "./questionnaire.dto";
import {ChoixQuestionDto} from "./choix-question.dto";

export class QuestionDto {
    id_question: number;
    typequestion: string;
    contenu: string;
    bareme: number;
    penalite: number;
    feedback?: string;
    id_questionnaire: QuestionnaireDto;
    choixquestions?: ChoixQuestionDto[];
}