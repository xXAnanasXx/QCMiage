import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UtilisateurService } from './utilisateur.service';
import {UtilisateurDto} from "../dto/utilisateur.dto";

@Injectable()
export class AuthService {
    constructor(
        private utilisateurService: UtilisateurService,
        private jwtService: JwtService,
    ) {}

    async validateUser(email: string, pass: string): Promise<any> {
        const utilisateur : UtilisateurDto = await this.utilisateurService.findByEmail(email);
        if (utilisateur && await bcrypt.compare(pass, utilisateur.mdp)) {
            const { mdp, ...result } = utilisateur;
            return result;
        }
        throw new UnauthorizedException('Invalid credentials');
    }

    async login(utilisateur: UtilisateurDto) {
        const payload = { sub: utilisateur.id_utilisateur, email: utilisateur.email, role: utilisateur.role };
        return {
            access_token: this.jwtService.sign(payload),
            utilisateur: {
                id_utilisateur: utilisateur.id_utilisateur,
                nom: utilisateur.nom,
                prenom: utilisateur.prenom,
                email: utilisateur.email,
                role: utilisateur.role
            }
        };
    }

    async register(utilisateurDto: UtilisateurDto): Promise<UtilisateurDto> {
        utilisateurDto.mdp = await bcrypt.hash(utilisateurDto.mdp, 10);
        return this.utilisateurService.create(utilisateurDto);
    }
}
