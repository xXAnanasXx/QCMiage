import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {SessionQuestionnaire} from "../entities/session-questionnaire.entity";
import {SessionQuestionnaireService} from "../services/session-questionnaire.service";
import {SessionQuestionnaireController} from "../controllers/session-questionnaire.controller";
import {UtilisateurModule} from "./utilisateur.module";
import {QuestionnaireModule} from "./questionnaire.module";

@Module({
    imports: [TypeOrmModule.forFeature([SessionQuestionnaire]), UtilisateurModule, QuestionnaireModule],
    providers: [SessionQuestionnaireService],
    controllers: [SessionQuestionnaireController],
    exports: [SessionQuestionnaireService],
}) export class SessionQuestionnaireModule {}