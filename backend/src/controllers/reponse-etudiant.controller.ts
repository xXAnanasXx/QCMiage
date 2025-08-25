import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
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

    @Post()
    async create(@Body() reponseEtudiantDto: ReponseEtudiantDto): Promise<ReponseEtudiantDto> {
        return this.reponseEtudiantService.create(reponseEtudiantDto);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() reponseEtudiantDto: ReponseEtudiantDto): Promise<ReponseEtudiantDto> {
        return this.reponseEtudiantService.update(id, reponseEtudiantDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        return this.reponseEtudiantService.delete(id);
    }
}