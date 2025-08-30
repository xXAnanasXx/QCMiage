import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Promotion} from "../entities/promotion.entity";
import {PromotionService} from "../services/promotion.service";
import {PromotionController} from "../controllers/promotion.controller";
import {ClasseModule} from "./classe.module";

@Module({
    imports: [TypeOrmModule.forFeature([Promotion]), ClasseModule],
    providers: [PromotionService],
    controllers: [PromotionController],
    exports: [PromotionService],
}) export class PromotionModule {}