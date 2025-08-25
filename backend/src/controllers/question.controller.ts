import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
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

    @Post()
    async create(@Body() questionDto: QuestionDto): Promise<void> {
        await this.questionService.create(questionDto);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() questionDto: QuestionDto): Promise<void> {
        await this.questionService.update(id, questionDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        await this.questionService.delete(id);
    }
}