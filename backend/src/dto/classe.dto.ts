import {PromotionDto} from "./promotion.dto";
import {UtilisateurDto} from "./utilisateur.dto";

export class ClasseDto {
    id_classe: number;
    nom: string;
    id_promotion: PromotionDto;
    eleves?: UtilisateurDto[];
}