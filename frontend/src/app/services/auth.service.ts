import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.http.post<{ access_token: string, utilisateur: Object}>(`${this.apiUrl}/auth/login`, { email, password });
  }

  saveUser(utilisateur: any) {
    localStorage.setItem('utilisateur', JSON.stringify(utilisateur));
  }

  getUser() {
    const utilisateur = localStorage.getItem('utilisateur');
    return utilisateur ? JSON.parse(utilisateur) : null;
  }

  register(nom: string, prenom: string, email: string, password: string) {
    return this.http.post(`${this.apiUrl}/auth/register`, { nom, prenom, email, password });
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('utilisateur');
    this.router.navigate(['/auth']);
  }
}
