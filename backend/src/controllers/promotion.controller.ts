import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { PromotionService } from '../services/promotion.service';
import { PromotionDto } from '../dto/promotion.dto';

@Controller('promotion')
export class PromotionController {
    constructor(private readonly promotionService: PromotionService) {}

    @Get('all')
    async getAll(): Promise<PromotionDto[]> {
        return this.promotionService.getAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<PromotionDto> {
        return this.promotionService.findOne(id);
    }

    @Post()
    async create(@Body() promotionDto: PromotionDto): Promise<PromotionDto> {
        return this.promotionService.create(promotionDto);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() promotionDto: PromotionDto): Promise<PromotionDto> {
        return this.promotionService.update(id, promotionDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        return this.promotionService.delete(id);
    }
}