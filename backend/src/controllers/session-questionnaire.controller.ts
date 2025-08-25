import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { SessionQuestionnaireService } from '../services/session-questionnaire.service';
import { SessionQuestionnaireDto } from '../dto/session-questionnaire.dto';

@Controller('session-questionnaire')
export class SessionQuestionnaireController {
    constructor(private readonly sessionQuestionnaireService: SessionQuestionnaireService) {}

    @Get('all')
    async getAll(): Promise<SessionQuestionnaireDto[]> {
        return this.sessionQuestionnaireService.getAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<SessionQuestionnaireDto> {
        return this.sessionQuestionnaireService.findOne(id);
    }

    @Post()
    async create(@Body() sessionQuestionnaireDto: SessionQuestionnaireDto): Promise<SessionQuestionnaireDto> {
        return this.sessionQuestionnaireService.create(sessionQuestionnaireDto);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() sessionQuestionnaireDto: SessionQuestionnaireDto): Promise<SessionQuestionnaireDto> {
        return this.sessionQuestionnaireService.update(id, sessionQuestionnaireDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        return this.sessionQuestionnaireService.delete(id);
    }
}