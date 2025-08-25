import { Controller, Get, Param } from '@nestjs/common';
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
}