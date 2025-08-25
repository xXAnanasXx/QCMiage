import {Module} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Promotion} from './entities/promotion.entity';
import {Classe} from './entities/classe.entity';
import {Utilisateur} from './entities/utilisateur.entity';
import {Questionnaire} from './entities/questionnaire.entity';
import {Question} from './entities/question.entity';
import {ChoixQuestion} from './entities/choix-question.entity';
import {UtilisateurController} from "./controllers/utilisateur.controller";
import {UtilisateurService} from "./services/utilisateur.service";
import {ChoixQuestionController} from "./controllers/choix-question.controller";
import {ClasseController} from "./controllers/classe.controller";
import {PromotionController} from "./controllers/promotion.controller";
import {QuestionController} from "./controllers/question.controller";
import {QuestionnaireController} from "./controllers/questionnaire.controller";
import {ReponseEtudiantController} from "./controllers/reponse-etudiant.controller";
import {SessionEtudiantController} from "./controllers/session-etudiant.controller";
import {SessionQuestionnaireController} from "./controllers/session-questionnaire.controller";
import {ChoixQuestionService} from "./services/choix-question.service";
import {ClasseService} from "./services/classe.service";
import {PromotionService} from "./services/promotion.service";
import {QuestionService} from "./services/question.service";
import {QuestionnaireService} from "./services/questionnaire.service";
import {ReponseEtudiantService} from "./services/reponse-etudiant.service";
import {SessionEtudiantService} from "./services/session-etudiant.service";
import {SessionQuestionnaireService} from "./services/session-questionnaire.service";
import {ReponseEtudiant} from "./entities/reponse-etudiant.entity";
import {SessionEtudiant} from "./entities/session-etudiant.entity";
import {SessionQuestionnaire} from "./entities/session-questionnaire.entity";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true, // pour que ce soit disponible partout
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: false, // ne pas utiliser en production
            autoLoadEntities: true,
            ssl: {
                rejectUnauthorized: false,
            },
        }),
        TypeOrmModule.forFeature([
            Promotion,
            Classe,
            Utilisateur,
            Questionnaire,
            Question,
            ChoixQuestion,
            ReponseEtudiant,
            SessionEtudiant,
            SessionQuestionnaire,
        ]),
    ],
    controllers: [AppController, ChoixQuestionController, ClasseController, PromotionController, QuestionController, QuestionnaireController, ReponseEtudiantController, SessionEtudiantController, SessionQuestionnaireController, UtilisateurController],
    providers: [AppService, ChoixQuestionService, ClasseService, PromotionService, QuestionService, QuestionnaireService, ReponseEtudiantService, SessionEtudiantService, SessionQuestionnaireService, UtilisateurService],
})
export class AppModule {
}
