import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn} from 'typeorm';
import { Promotion } from './promotion.entity';
import { Utilisateur } from './utilisateur.entity';

@Entity()
export class Classe {
  @PrimaryGeneratedColumn()
  id_classe: number;

  @Column({ length: 100 })
  nom: string;

  @ManyToOne(() => Promotion, (promotion) => promotion.classes)
  @JoinColumn({ name: 'id_promotion' })
  id_promotion: Promotion;

  @OneToMany(() => Utilisateur, (utilisateur) => utilisateur.id_classe)
  eleves: Utilisateur[];
}