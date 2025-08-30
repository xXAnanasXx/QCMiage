import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {SessionEtudiant} from "../entities/session-etudiant.entity";
import {SessionEtudiantService} from "../services/session-etudiant.service";
import {SessionEtudiantController} from "../controllers/session-etudiant.controller";
import {SessionQuestionnaireModule} from "./session-questionnaire.module";
import {UtilisateurModule} from "./utilisateur.module";

@Module({
    imports: [TypeOrmModule.forFeature([SessionEtudiant]), SessionQuestionnaireModule, UtilisateurModule],
    providers: [SessionEtudiantService],
    controllers: [SessionEtudiantController],
    exports: [SessionEtudiantService],
}) export class SessionEtudiantModule {}