import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Utilisateur} from "./entities/utilisateur.entity";

@Injectable()
export class AppService {
    constructor(@InjectRepository(Utilisateur) private readonly utilisateurRepository: Repository<Utilisateur>) {
    }


    getProfile() {
        let response = Math.random() <= 0.9 ? 'ma poule' : 'sale batard';
        return {name: response};
    }

    // async getUser(id: number): Promise<Utilisateur> {
    //     return await this.utilisateurRepository.findOne({
    //         where: {id}
    //     });
    // }
}
