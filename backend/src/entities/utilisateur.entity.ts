import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Classe } from './classe.entity';

@Entity()
export class Utilisateur {
  @PrimaryGeneratedColumn()
  id_utilisateur: number;

  @Column({ length: 255 })
  mdp: string;

  @Column({ length: 100 })
  nom: string;

  @Column({ length: 100 })
  prenom: string;

  @Column({ length: 150, nullable: true })
  email: string;

  @Column({ length: 20 })
  role: string;

  @ManyToOne(() => Classe, (classe) => classe.eleves)
  @JoinColumn({ name: 'id_classe' })
  id_classe: Classe;
}