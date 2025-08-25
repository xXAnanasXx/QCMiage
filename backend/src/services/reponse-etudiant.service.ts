import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ReponseEtudiant} from "../entities/reponse-etudiant.entity";
import {ReponseEtudiantDto} from "../dto/reponse-etudiant.dto";
import {SessionEtudiantService} from "./session-etudiant.service";
import {UtilisateurService} from "./utilisateur.service";

@Injectable()
export class ReponseEtudiantService {
    constructor(@InjectRepository(ReponseEtudiant) private readonly reponseEtudiantRepository: Repository<ReponseEtudiant>,
                private readonly sessionEtudiantService: SessionEtudiantService,
                private readonly utilisateurService: UtilisateurService) {
    }

    async findOne(id: number): Promise<ReponseEtudiantDto> {
        const reponseEtudiant = await this.reponseEtudiantRepository.findOne({
            where: {id_reponseetudiant: id},
            relations: ['id_sessionetudiant', 'id_sessionetudiant.id_etudiant', 'id_sessionetudiant.id_sessionquestionnaire'],
        });
        if (!reponseEtudiant) {
            throw new Error('Réponse étudiant non trouvée');
        }
        return this.reponseEtudiantEntityToDto(reponseEtudiant);
    }

    async getAll(): Promise<ReponseEtudiant[]> {
        return this.reponseEtudiantRepository.find();
    }

    reponseEtudiantEntityToDto(reponseEtudiant: ReponseEtudiant | null): ReponseEtudiantDto {
        if (!reponseEtudiant) {
            return null;
        }
        return {
            id_reponseetudiant: reponseEtudiant.id_reponseetudiant,
            reponselibre: reponseEtudiant.reponselibre,
            id_sessionetudiant: this.sessionEtudiantService.sessionEtudiantEntityToDto(reponseEtudiant.id_sessionetudiant),
        };
    }

    reponseEtudiantListEntityToDto(reponses: ReponseEtudiant[]): ReponseEtudiantDto[] {
        if (!reponses || reponses.length === 0) {
            throw new Error('No reponses provided or the list is empty');
        }
        return reponses.map(reponse => this.reponseEtudiantEntityToDto(reponse));
    }
}