import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Question} from "../entities/question.entity";
import {QuestionService} from "../services/question.service";
import {QuestionController} from "../controllers/question.controller";
import {ChoixQuestionModule} from "./choix-question.module";

@Module({
    imports: [TypeOrmModule.forFeature([Question]), ChoixQuestionModule],
    providers: [QuestionService],
    controllers: [QuestionController],
    exports: [QuestionService],
}) export class QuestionModule {}