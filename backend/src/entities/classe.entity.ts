import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Promotion } from './promotion.entity';
import { Utilisateur } from './utilisateur.entity';

@Entity()
export class Classe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nom: string;

  @ManyToOne(() => Promotion, (promotion) => promotion.classes)
  promotion: Promotion;

  @OneToMany(() => Utilisateur, (utilisateur) => utilisateur.classe)
  utilisateurs: Utilisateur[];
}