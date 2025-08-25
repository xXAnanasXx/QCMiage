import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Promotion} from "../entities/promotion.entity";
import {PromotionDto} from "../dto/promotion.dto";
import {ClasseService} from "./classe.service";

@Injectable()
export class PromotionService {
    constructor(@InjectRepository(Promotion) private readonly promotionRepository: Repository<Promotion>,
                private readonly classeService: ClasseService) {
    }

    async findOne(id: number): Promise<PromotionDto> {
        const promotion = await this.promotionRepository.findOne({
            where: {id_promotion: id},
            relations: ['classes'],
        });
        if (!promotion) {
            throw new Error('Promotion non trouvée');
        }
        return this.promotionEntityToDto(promotion);
    }

    async getAll(): Promise<Promotion[]> {
        return this.promotionRepository.find();
    }

    promotionEntityToDto(promotion: Promotion | null): PromotionDto {
        if (!promotion) {
            return null;
        }
        return {
            id_promotion: promotion.id_promotion,
            nom: promotion.nom,
            annee: promotion.annee,
            classes: this.classeService.classeListEntityToDto(promotion.classes),
        };
    }

    promotionListEntityToDto(promotions: Promotion[] | null): PromotionDto[] {
        if (!promotions || promotions.length === 0) {
            return [];
        }
        return promotions.map(promotion => this.promotionEntityToDto(promotion));
    }
}