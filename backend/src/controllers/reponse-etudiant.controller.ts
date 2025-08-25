import { Controller, Get, Param } from '@nestjs/common';
import { ReponseEtudiantService } from '../services/reponse-etudiant.service';
import { ReponseEtudiantDto } from '../dto/reponse-etudiant.dto';

@Controller('reponse-etudiant')
export class ReponseEtudiantController {
    constructor(private readonly reponseEtudiantService: ReponseEtudiantService) {}

    @Get('all')
    async getAll(): Promise<ReponseEtudiantDto[]> {
        return this.reponseEtudiantService.getAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<ReponseEtudiantDto> {
        return this.reponseEtudiantService.findOne(id);
    }
}