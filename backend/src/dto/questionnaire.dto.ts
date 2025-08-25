import {QuestionDto} from "./question.dto";

export class QuestionnaireDto {
    id_questionnaire: number;
    titre: string;
    description?: string;
    duree: number;
    questions?: QuestionDto[];
}