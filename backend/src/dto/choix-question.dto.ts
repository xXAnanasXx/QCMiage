import {QuestionDto} from "./question.dto";

export class ChoixQuestionDto {
    id_choixquestion: number;
    contenu: string;
    estcorrecte: boolean;
    id_question: QuestionDto;
}