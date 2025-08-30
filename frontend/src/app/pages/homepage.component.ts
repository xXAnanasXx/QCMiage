import {Component, signal, OnInit} from '@angular/core';
import { HomepageService } from './homepage.service';
import { UtilisateurService } from '../services/utilisateur.service';
import { RouterModule } from '@angular/router';
import {NgIf} from '@angular/common';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css']
})
export class HomepageComponent implements OnInit {
  profile = signal({
    id_utilisateur: 0,
    nom: '',
    prenom: '',
    email: '',
    role: ''
  });

  constructor(
    private homepageService: HomepageService,
    private utilisateurService: UtilisateurService,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    await this.loadProfile();
  }

  async loadProfile() {
    try {
      const utilisateur = this.authService.getUser();
      this.profile.set(utilisateur);
    } catch (error) {
      console.error('Erreur lors de la récupération du profil:', error);
    }
  }

  async logout() {
    await this.authService.logout();
  }
}
