import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn} from 'typeorm';
import { SessionQuestionnaire } from './session-questionnaire.entity';
import { Utilisateur } from './utilisateur.entity';

@Entity('sessionetudiant')
export class SessionEtudiant {
  @PrimaryGeneratedColumn()
  id_sessionetudiant: number;

  @Column()
  pertefocus: number;

  @ManyToOne(() => SessionQuestionnaire, (sessionQuestionnaire) => sessionQuestionnaire.id_sessionquestionnaire)
  @JoinColumn({ name: 'id_sessionquestionnaire' })
  id_sessionquestionnaire: SessionQuestionnaire;

  @ManyToOne(() => Utilisateur, (utilisateur) => utilisateur.id_utilisateur)
  @JoinColumn({ name: 'id_etudiant' })
  id_etudiant: Utilisateur;
}