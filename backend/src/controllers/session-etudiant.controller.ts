import { Controller, Get, Param } from '@nestjs/common';
import { SessionEtudiantService } from '../services/session-etudiant.service';
import { SessionEtudiantDto } from '../dto/session-etudiant.dto';

@Controller('session-etudiant')
export class SessionEtudiantController {
    constructor(private readonly sessionEtudiantService: SessionEtudiantService) {}

    @Get('all')
    async getAll(): Promise<SessionEtudiantDto[]> {
        return this.sessionEtudiantService.getAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<SessionEtudiantDto> {
        return this.sessionEtudiantService.findOne(id);
    }
}