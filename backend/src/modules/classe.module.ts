import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Classe} from "../entities/classe.entity";
import {ClasseService} from "../services/classe.service";
import {ClasseController} from "../controllers/classe.controller";
import {UtilisateurModule} from "./utilisateur.module";

@Module({
    imports: [TypeOrmModule.forFeature([Classe]), UtilisateurModule],
    providers: [ClasseService],
    controllers: [ClasseController],
    exports: [ClasseService],
}) export class ClasseModule {}