import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Utilisateur} from '../entities/utilisateur.entity';
import {UtilisateurDto} from '../dto/utilisateur.dto';

@Injectable()
export class UtilisateurService {
    constructor(
        @InjectRepository(Utilisateur)
        private readonly utilisateurRepository: Repository<Utilisateur>,
    ) {
    }

    async findOne(id: number): Promise<UtilisateurDto> {
        const utilisateur = await this.utilisateurRepository.findOne({
            where: {id_utilisateur: id},
        });
        if (!utilisateur) {
            throw new Error('Utilisateur non trouvé');
        }
        return {
            id_utilisateur: utilisateur.id_utilisateur,
            nom: utilisateur.nom,
            prenom: utilisateur.prenom,
            email: utilisateur.email,
            role: utilisateur.role,
        };
    }

    async getAll(): Promise<UtilisateurDto[]> {
        const utilisateurs = await this.utilisateurRepository.find();
        return this.utilisateurListEntityToDto(utilisateurs);
    }

    utilisateurEntityToDto(utilisateur: Utilisateur | null): UtilisateurDto {
        if (!utilisateur) {
            return null;
        }
        return {
            id_utilisateur: utilisateur.id_utilisateur,
            nom: utilisateur.nom,
            prenom: utilisateur.prenom,
            email: utilisateur.email,
            role: utilisateur.role,
        };
    }

    utilisateurListEntityToDto(utilisateurs: Utilisateur[] | null): UtilisateurDto[] {
        if (!utilisateurs || utilisateurs.length === 0) {
            return [];
        }
        return utilisateurs.map(utilisateur => this.utilisateurEntityToDto(utilisateur));
    }
}