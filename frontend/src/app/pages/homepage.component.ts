import {Component, signal, OnInit} from '@angular/core';
import {HomepageService} from './homepage.service';
import {UtilisateurService} from '../services/utilisateur.service';
import {ClasseService} from '../services/classe.service';
import {Utilisateur} from '../common/models/utilisateur.model';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class HomepageComponent implements OnInit {
  message = signal<string>('Chargement...');
  profile = signal<Utilisateur>('U.N. Owen' as unknown as Utilisateur);

  constructor(private homepageService: HomepageService, private utilisateurService: UtilisateurService, private classeService: ClasseService) {
  }

  ngOnInit() {
    this.homepageService.getProfile().subscribe({
      next: response => {
        this.message.set(response.name);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération du profil:', error);
        this.message.set('Erreur API');
      }
    });

    this.utilisateurService.getAllUtilisateurs().subscribe({
      next: response => {
        console.log('Liste des utilisateurs:', response);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      }
    });

    this.classeService.getAllClasses().subscribe({
      next: response => {
        console.log('Liste des classes:', response);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des classes:', error);
      }
    });

    this.loadProfile();
  }

  loadProfile() {
    this.utilisateurService.getUtilisateur(1).subscribe({
      next: response => {
        console.log('Utilisateur récupéré:', response);
        this.profile.set(response);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération de l\'utilisateur:', error);
      }
    });
  }
}
