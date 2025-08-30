import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { UtilisateurService } from '../services/utilisateur.service';
import { UtilisateurDto } from '../dto/utilisateur.dto';

@Controller('utilisateur')
export class UtilisateurController {
    constructor(private readonly utilisateurService: UtilisateurService) {}

    @Get('all')
    async getAll(): Promise<UtilisateurDto[]> {
        return this.utilisateurService.utilisateurListEntityToDto(await this.utilisateurService.getAll());
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<UtilisateurDto> {
        return this.utilisateurService.findOne(id);
    }

    @Get('email/:email')
    async findByEmail(@Param('email') email: string): Promise<UtilisateurDto> {
        return this.utilisateurService.findByEmail(email);
    }

    @Post()
    async create(@Body() utilisateurDto: UtilisateurDto): Promise<UtilisateurDto> {
        return await this.utilisateurService.create(utilisateurDto);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() utilisateurDto: UtilisateurDto): Promise<UtilisateurDto> {
        const utilisateur = await this.utilisateurService.update(id, utilisateurDto);
        return this.utilisateurService.utilisateurEntityToDto(utilisateur);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        return this.utilisateurService.delete(id);
    }
}