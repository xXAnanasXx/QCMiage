import { Controller, Get, Param } from '@nestjs/common';
import { ChoixQuestionService } from '../services/choix-question.service';
import { ChoixQuestionDto } from '../dto/choix-question.dto';

@Controller('choix-question')
export class ChoixQuestionController {
    constructor(private readonly choixQuestionService: ChoixQuestionService) {}

    @Get('all')
    async getAll(): Promise<ChoixQuestionDto[]> {
        return this.choixQuestionService.getAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<ChoixQuestionDto> {
        return this.choixQuestionService.findOne(id);
    }
}