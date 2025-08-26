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
        return this.utilisateurEntityToDto(utilisateur);
    }

    async create(utilisateurDto: UtilisateurDto): Promise<Utilisateur> {
        const utilisateur = this.utilisateurRepository.create(utilisateurDto);
        return this.utilisateurRepository.save(utilisateur);
    }

    async update(id: number, utilisateurDto: UtilisateurDto): Promise<Utilisateur> {
        const utilisateur = await this.utilisateurRepository.findOne({where: {id_utilisateur: id}});
        if (!utilisateur) {
            throw new Error('Utilisateur non trouvé');
        }
        Object.assign(utilisateur, utilisateurDto);
        return this.utilisateurRepository.save(utilisateur);
    }

    async delete(id: number): Promise<void> {
        const utilisateur = await this.utilisateurRepository.findOne({where: {id_utilisateur: id}});
        if (!utilisateur) {
            throw new Error('Utilisateur non trouvé');
        }
        await this.utilisateurRepository.remove(utilisateur);
    }

    async getAll(): Promise<Utilisateur[]> {
        return  this.utilisateurRepository.find();
    }

    utilisateurEntityToDto(utilisateur: Utilisateur | null): UtilisateurDto {
        if (!utilisateur) {
            return null;
        }
        return {
            id_utilisateur: utilisateur.id_utilisateur,
            mdp: utilisateur.mdp,
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