import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ReponseEtudiant} from "../entities/reponse-etudiant.entity";
import {ReponseEtudiantService} from "../services/reponse-etudiant.service";
import {ReponseEtudiantController} from "../controllers/reponse-etudiant.controller";
import {UtilisateurModule} from "./utilisateur.module";
import {SessionEtudiantModule} from "./session-etudiant.module";

@Module({
    imports: [TypeOrmModule.forFeature([ReponseEtudiant]), UtilisateurModule, SessionEtudiantModule],
    providers: [ReponseEtudiantService],
    controllers: [ReponseEtudiantController],
    exports: [ReponseEtudiantService],
}) export class ReponseEtudiantModule {}