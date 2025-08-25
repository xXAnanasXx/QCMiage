import {ClasseDto} from "./classe.dto";

export class PromotionDto {
    id_promotion: number;
    nom: string;
    annee: number;
    classes: ClasseDto[];
}