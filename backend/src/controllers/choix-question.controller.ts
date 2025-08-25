import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
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

    @Post()
    async create(@Body() choixQuestionDto: ChoixQuestionDto): Promise<ChoixQuestionDto> {
        return this.choixQuestionService.create(choixQuestionDto);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() choixQuestionDto: ChoixQuestionDto): Promise<ChoixQuestionDto> {
        return this.choixQuestionService.update(id, choixQuestionDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        return this.choixQuestionService.delete(id);
    }
}