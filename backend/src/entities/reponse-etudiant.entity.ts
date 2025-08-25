import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn} from 'typeorm';
import { SessionEtudiant } from './session-etudiant.entity';

@Entity('reponseetudiant')
export class ReponseEtudiant {
  @PrimaryGeneratedColumn()
  id_reponseetudiant: number;

  @Column({ type: 'text', nullable: true })
  reponselibre: string;

  @ManyToOne(() => SessionEtudiant, (sessionEtudiant) => sessionEtudiant.id_sessionetudiant, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_sessionetudiant' })
  id_sessionetudiant: SessionEtudiant;
}