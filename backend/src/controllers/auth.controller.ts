import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import {UtilisateurDto} from "../dto/utilisateur.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body() body: { email: string; password: string }) {
        return this.authService.validateUser(body.email, body.password)
            .then(user => this.authService.login(user));
    }

    @Post('register')
    async register(@Body() body: { nom: string; prenom: string; email: string; password: string }) {
        const utilisateurDto: UtilisateurDto = {
            id_utilisateur: 0,
            nom: body.nom,
            prenom: body.prenom,
            email: body.email,
            mdp: body.password,
            role: 'etudiant' // Default role
        };
        return this.authService.register(utilisateurDto);
    }
}
