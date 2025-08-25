import { Controller, Get, Param } from '@nestjs/common';
import { QuestionnaireService } from '../services/questionnaire.service';
import { QuestionnaireDto } from '../dto/questionnaire.dto';

@Controller('questionnaire')
export class QuestionnaireController {
    constructor(private readonly questionnaireService: QuestionnaireService) {}

    @Get('all')
    async getAll(): Promise<QuestionnaireDto[]> {
        return this.questionnaireService.getAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<QuestionnaireDto> {
        return this.questionnaireService.findOne(id);
    }
}