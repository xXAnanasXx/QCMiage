import {Module} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AuthModule } from "./modules/auth.module";
import { ChoixQuestionModule } from './modules/choix-question.module';
import { ClasseModule } from './modules/classe.module';
import { PromotionModule } from './modules/promotion.module';
import { QuestionModule } from './modules/question.module';
import { QuestionnaireModule } from './modules/questionnaire.module';
import { ReponseEtudiantModule } from './modules/reponse-etudiant.module';
import { SessionEtudiantModule } from './modules/session-etudiant.module';
import { SessionQuestionnaireModule } from './modules/session-questionnaire.module';
import { UtilisateurModule } from './modules/utilisateur.module';


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
        AuthModule,
        ChoixQuestionModule,
        ClasseModule,
        PromotionModule,
        QuestionModule,
        QuestionnaireModule,
        ReponseEtudiantModule,
        SessionEtudiantModule,
        SessionQuestionnaireModule,
        UtilisateurModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
