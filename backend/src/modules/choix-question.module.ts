import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ChoixQuestion} from "../entities/choix-question.entity";
import {ChoixQuestionService} from "../services/choix-question.service";
import {ChoixQuestionController} from "../controllers/choix-question.controller";

@Module({
    imports: [TypeOrmModule.forFeature([ChoixQuestion])],
    providers: [ChoixQuestionService],
    controllers: [ChoixQuestionController],
    exports: [ChoixQuestionService],
}) export class ChoixQuestionModule {}