import { Controller, Get, Param } from '@nestjs/common';
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
}