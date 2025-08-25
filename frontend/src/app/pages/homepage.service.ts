import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utilisateur} from '../common/models/utilisateur.model';

@Injectable({ providedIn: 'root' })
export class HomepageService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http.get<{ name: string }>(`${this.apiUrl}/profile`);
  }

  getUtilisateur(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.apiUrl}/utilisateur/${id}`);
  }
}
