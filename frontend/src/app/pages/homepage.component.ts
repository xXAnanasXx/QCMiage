import { Component, signal, OnInit } from '@angular/core';
import { HomepageService } from './homepage.service';
import { UtilisateurService } from '../services/utilisateur.service';
import { Utilisateur } from '../common/models/utilisateur.model';
import { RouterModule } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterModule], // Important pour routerLink
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css']
})
export class HomepageComponent implements OnInit {
  message = signal<string>('Chargement...');
  profile = signal<Utilisateur>('U.N. Owen' as unknown as Utilisateur);

  constructor(
    private homepageService: HomepageService,
    private utilisateurService: UtilisateurService
  ) {}

  async ngOnInit() {
    this.homepageService.getProfile().subscribe({
      next: response => {
        this.message.set(response.name);
      },
      error: error => {
        console.error('Erreur lors de la récupération du profil:', error);
        this.message.set('Erreur API');
      }
    });

    // try {
    //   const newUtilisateur = await firstValueFrom(
    //     this.utilisateurService.createUtilisateur({
    //       id_utilisateur: 0, // Backend will generate the ID
    //       mdp: 'password123',
    //       nom: 'Doe',
    //       prenom: 'John',
    //       email: 'john.doe@example.com',
    //       role: 'Student'
    //     })
    //   );
    //   console.log('Utilisateur créé avec succès:', newUtilisateur);
    //
    //   newUtilisateur.nom = 'newpassword456';
    //   const updatedUtilisateur = await firstValueFrom(
    //     this.utilisateurService.updateUtilisateur(1, newUtilisateur)
    //   );
    //   console.log('Utilisateur mis à jour avec succès:', updatedUtilisateur);
    //
    //   await firstValueFrom(this.utilisateurService.deleteUtilisateur(newUtilisateur.id_utilisateur));
    //   console.log('Utilisateur supprimé avec succès');
    //
    //   const utilisateursAfterOperations = await firstValueFrom(this.utilisateurService.getAllUtilisateurs());
    //   console.log('Liste des utilisateurs après toutes les opérations:', utilisateursAfterOperations);
    // } catch (error) {
    //   console.error('Erreur lors de l\'exécution des appels API:', error);
    // }

    this.loadProfile();
  }

  loadProfile() {
    this.utilisateurService.getUtilisateur(1).subscribe({
      next: response => {
        console.log('Utilisateur récupéré:', response);
        this.profile.set(response);
      },
      error: error => {
        console.error('Erreur lors de la récupération de l\'utilisateur:', error);
      }
    });
  }
}
