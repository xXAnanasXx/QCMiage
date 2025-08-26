import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Classe} from "../entities/classe.entity";
import {ClasseDto} from "../dto/classe.dto";
import {UtilisateurService}  from "./utilisateur.service";

@Injectable()
export class ClasseService {
    constructor(@InjectRepository(Classe) private readonly classeRepository: Repository<Classe>,
                private readonly utilisateurService: UtilisateurService) {
    }

    async findOne(id: number): Promise<ClasseDto> {
        const classe = await this.classeRepository.findOne({
            where: {id_classe: id},
            relations: ['id_promotion', 'eleves'],
        });
        if (!classe) {
            throw new Error('Classe non trouvée');
        }
        return this.classeEntityToDto(classe);
    }

    async create(classeDto: ClasseDto): Promise<ClasseDto> {
        const classe = this.classeRepository.create(classeDto);
        await this.classeRepository.save(classe);
        return this.classeEntityToDto(classe);
    }

    async update(id: number, classeDto: ClasseDto): Promise<ClasseDto> {
        const classe = await this.classeRepository.findOneBy({id_classe: id});
        if (!classe) {
            throw new Error('Classe non trouvée');
        }
        Object.assign(classe, classeDto);
        await this.classeRepository.save(classe);
        return this.classeEntityToDto(classe);
    }

    async delete(id: number): Promise<void> {
        const classe = await this.classeRepository.findOneBy({id_classe: id});
        if (!classe) {
            throw new Error('Classe non trouvée');
        }
        await this.classeRepository.remove(classe);
    }

    async getAll(): Promise<Classe[]> {
        return this.classeRepository.find({relations: ['id_promotion', 'eleves']});
    }

    classeEntityToDto(classe: Classe | null): ClasseDto {
        if (!classe) {
            return null;
        }
        return {
            id_classe: classe.id_classe,
            nom: classe.nom,
            id_promotion: classe.id_promotion,
            eleves: this.utilisateurService.utilisateurListEntityToDto(classe.eleves),
        };
    }

    classeListEntityToDto(classes: Classe[] | null): ClasseDto[] {
        if (!classes || classes.length === 0) {
            return [];
        }
        return classes.map(classe => this.classeEntityToDto(classe));
    }
}