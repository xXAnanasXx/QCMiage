import { Controller, Get, Param } from '@nestjs/common';
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
}