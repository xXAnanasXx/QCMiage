import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { ClasseService } from '../services/classe.service';
import { ClasseDto } from '../dto/classe.dto';

@Controller('classe')
export class ClasseController {
    constructor(private readonly classeService: ClasseService) {}

    @Get('all')
    async getAll(): Promise<ClasseDto[]> {
        return this.classeService.getAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<ClasseDto> {
        return this.classeService.findOne(id);
    }

    @Post()
    async create(@Body() classeDto: ClasseDto): Promise<ClasseDto> {
        return this.classeService.create(classeDto);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() classeDto: ClasseDto): Promise<ClasseDto> {
        return this.classeService.update(id, classeDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        return this.classeService.delete(id);
    }
}