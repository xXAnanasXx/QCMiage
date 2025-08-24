import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Classe } from './classe.entity';

@Entity()
export class Promotion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nom: string;

  @Column()
  annee: number;

  @OneToMany(() => Classe, (classe) => classe.promotion)
  classes: Classe[];
}