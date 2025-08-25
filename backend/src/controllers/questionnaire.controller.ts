import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
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

    @Post()
    async create(@Body() questionnaireDto: QuestionnaireDto): Promise<QuestionnaireDto> {
        return this.questionnaireService.create(questionnaireDto);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() questionnaireDto: QuestionnaireDto): Promise<QuestionnaireDto> {
        return this.questionnaireService.update(id, questionnaireDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        return this.questionnaireService.delete(id);
    }
}