import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Questionnaire} from "../entities/questionnaire.entity";
import {QuestionnaireService} from "../services/questionnaire.service";
import {QuestionnaireController} from "../controllers/questionnaire.controller";
import {QuestionModule} from "./question.module";

@Module({
    imports: [TypeOrmModule.forFeature([Questionnaire]), QuestionModule],
    providers: [QuestionnaireService],
    controllers: [QuestionnaireController],
    exports: [QuestionnaireService],
}) export class QuestionnaireModule {}