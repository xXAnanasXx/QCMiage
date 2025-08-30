import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Utilisateur} from "../entities/utilisateur.entity";
import {UtilisateurService} from "../services/utilisateur.service";
import {UtilisateurController} from "../controllers/utilisateur.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Utilisateur])],
    providers: [UtilisateurService],
    controllers: [UtilisateurController],
    exports: [UtilisateurService],
}) export class UtilisateurModule {}