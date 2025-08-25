import {Component, ChangeDetectorRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Router} from '@angular/router';
import {ClasseService} from '../../services/classe.service';
import {UtilisateurService} from '../../services/utilisateur.service';
import {PromotionService} from '../../services/promotion.service';
import {Utilisateur} from '../../common/models/utilisateur.model';
import {Classe} from '../../common/models/classe.model';
import {Promotion} from '../../common/models/promotion.model';

interface Group {
  classe: Classe;
  searchText: string;
  errorMessage: string;
}

@Component({
  selector: 'app-create-group',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './createGroup.html',
  styleUrls: ['./createGroup.css']
})
export class CreateGroupComponent {
  allStudents: Utilisateur[] = [];
  groups: Group[] = [];

  constructor(private router: Router, private cdr: ChangeDetectorRef, private classeService: ClasseService, private utilisateurService: UtilisateurService, private promotionService: PromotionService) {
    utilisateurService.getAllUtilisateurs().subscribe({
      next: (users) => {
        this.allStudents = users;
        console.log(this.allStudents);
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      }
    });

    this.classeService.getAllClasses().subscribe({
      next: (classes) => {
        this.groups = classes.map(classe => ({
          classe,
          searchText: '',
          errorMessage: ''
        }));
        console.log(this.groups);
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des classes:', error);
      }
    });
  }

  getFilteredStudents(classe: Classe): Utilisateur[] {
    return this.allStudents.filter((u: Utilisateur) =>
      u.role === 'etudiant' && classe.eleves?.includes(u)
    );
  }

  isInAnyGroup(student: Utilisateur): boolean {
    return this.groups.some(group => group.classe.eleves?.includes(student));
  }

  addToGroup(group: Group): void {
    const search = group.searchText.trim();

    if (!search) return;

    if (!this.allStudents.some(student => student.nom === search || student.prenom === search)) {
      group.errorMessage = 'Cet élève n’existe pas dans la liste.';
      return;
    }
    let student = this.allStudents.find(s => s.nom === search || s.prenom === search);
    if (!student) return;

    if (this.isInAnyGroup(student)) {
      group.errorMessage = 'Cet élève est déjà dans un groupe.';
      return;
    }

    this.classeService.addStudentToClass(group.classe.id_classe, student.id_utilisateur).subscribe({
      next: (updatedClasse) => {
        group.classe.eleves?.push(student);
      },
      error: (error) => {
        console.error('Erreur lors de l\'ajout de l\'élève à la classe:', error);
      }
    });
    group.searchText = '';
    group.errorMessage = '';
  }

  removeFromGroup(classe: Classe, student: Utilisateur): void {
    this.classeService.removeStudentFromClass(classe.id_classe, student.id_utilisateur).subscribe({
      next: (updatedClasse) => {
        const index = classe.eleves?.indexOf(student);
        if (index !== undefined && index > -1) {
          if (classe.eleves) {
            classe.eleves.splice(index, 1);
          }
        }
      },
      error: (error) => {
        console.error('Erreur lors de la suppression de l\'élève de la classe:', error);
      }
    });
  }

  addGroup(): void {
    const newIndex = this.groups.length + 1;

    this.promotionService.getPromotion(1).subscribe({
      next: (promotion) => {
        this.classeService.createClasse({
          id_classe: 0,
          nom: `Classe ${newIndex}`,
          id_promotion: promotion,
          eleves: []
        }).subscribe({
          next: (newClasse) => {
            this.groups.push({
              classe: newClasse,
              searchText: '',
              errorMessage: ''
            });
          },
          error: (error) => {
            console.error('Erreur lors de la création de la classe:', error);
          }
        });
      },
      error: (error) => {
        console.error('Erreur lors de la récupération de la promotion:', error);
      }
    });
  }

  removeGroup(index: number): void {
    this.classeService.deleteClasse(this.groups[index].classe.id_classe).subscribe({
      next: () => {
        this.groups.splice(index, 1);
      },
      error: (error) => {
        console.error('Erreur lors de la suppression de la classe:', error);
      }
    });
  }

  saveAndGoBack(): void {

    this.router.navigate(['/']);
  }
}
