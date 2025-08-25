import { Controller, Get, Param } from '@nestjs/common';
import { UtilisateurService } from '../services/utilisateur.service';
import { UtilisateurDto } from '../dto/utilisateur.dto';

@Controller('utilisateur')
export class UtilisateurController {
    constructor(private readonly utilisateurService: UtilisateurService) {}

    @Get('all')
    async getAll(): Promise<UtilisateurDto[]> {
        return this.utilisateurService.getAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<UtilisateurDto> {
        return this.utilisateurService.findOne(id);
    }
}