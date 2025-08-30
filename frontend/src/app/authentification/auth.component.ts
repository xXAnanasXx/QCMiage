import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import {AuthService} from '../services/auth.service';
import {UtilisateurService} from '../services/utilisateur.service';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: './auth.html',
  styleUrls: ['./auth.css'],
  imports: [NgIf, FormsModule]
})
export class AuthComponent {
  isLogin: boolean = true;
  formData: {
    nom: string;
    prenom: string;
    email: string;
    password: string;
  };

  constructor(private authService: AuthService, private utilisateurService: UtilisateurService, private router: Router) {
    this.formData = { nom: '', prenom: '', email: '', password: '' };
  }

  async ngOnInit() {
    this.formData = { nom: '', prenom: '', email: '', password: '' };
    this.loadProfile();
  }

  loadProfile() {
    this.utilisateurService.getUtilisateur(1).subscribe({
      next: response => {
        console.log('Utilisateur récupéré:', response);
      },
      error: error => {
        console.error('Erreur lors de la récupération de l\'utilisateur:', error);
      }
    });
  }

  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(isLogin: boolean) {
    if (isLogin) {
      this.Connect();
    } else {
      this.Register();
    }
  }

  Connect() {
    const email = this.formData.email;
    const password = this.formData.password;

    this.authService.login(email, password).subscribe({
      next: response => {
        console.log('Login successful:', response);
        this.authService.saveToken(response.access_token);
        this.router.navigate(['/']);
      },
      error: error => {
        console.error('Login failed:', error);
      }
    });
  }

  Register() {
    const nom = this.formData.nom;
    const prenom = this.formData.prenom;
    const email = this.formData.email;
    const password = this.formData.password;

    this.utilisateurService.createUtilisateur({id_utilisateur: 0, nom: nom, prenom: prenom, email: email, mdp: password, role: 'etudiant'}).subscribe({
      next: response => {
        console.log('Registration successful:', response);
        this.Connect();
      },
      error: error => {
        console.error('Registration failed:', error);
      }
    });
  }
}
