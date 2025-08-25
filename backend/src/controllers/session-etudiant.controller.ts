import {Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
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

    @Post()
    async create(@Param() sessionEtudiantDto: SessionEtudiantDto): Promise<SessionEtudiantDto> {
        return this.sessionEtudiantService.create(sessionEtudiantDto);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Param() sessionEtudiantDto: SessionEtudiantDto): Promise<SessionEtudiantDto> {
        return this.sessionEtudiantService.update(id, sessionEtudiantDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        return this.sessionEtudiantService.delete(id);
    }
}