import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import { Utilisateur } from './utilisateur.entity';

@Entity('sessionquestionnaire')
export class SessionQuestionnaire {
  @PrimaryGeneratedColumn()
  id_sessionquestionnaire: number;

  @Column({ type: 'timestamp' })
  date: Date;

  @Column({ type: 'int', nullable: true })
  duree: number;

  @Column({ length: 20 })
  statut: string;

  @ManyToOne(() => Utilisateur, (utilisateur) => utilisateur.id_utilisateur)
  @JoinColumn({ name: 'id_administrateur' })
  id_administrateur: Utilisateur;
}