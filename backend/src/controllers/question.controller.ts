import { Controller, Get, Param } from '@nestjs/common';
import { QuestionService } from '../services/question.service';
import { QuestionDto } from '../dto/question.dto';

@Controller('question')
export class QuestionController {
    constructor(private readonly questionService: QuestionService) {}

    @Get('all')
    async getAll(): Promise<QuestionDto[]> {
        return this.questionService.getAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<QuestionDto> {
        return this.questionService.findOne(id);
    }
}