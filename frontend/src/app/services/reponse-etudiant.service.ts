import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {ReponseEtudiant} from '../common/models/reponse-etudiant.model';

@Injectable({ providedIn: 'root' })
export class ReponseEtudiantService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getReponseEtudiant(id: number): Observable<ReponseEtudiant> {
    return this.http.get<ReponseEtudiant>(`${this.apiUrl}/reponse-etudiant/${id}`);
  }

  createReponseEtudiant(reponseEtudiant: ReponseEtudiant): Observable<ReponseEtudiant> {
    return this.http.post<ReponseEtudiant>(`${this.apiUrl}/reponse-etudiant`, reponseEtudiant);
  }

  updateReponseEtudiant(id: number, reponseEtudiant: ReponseEtudiant): Observable<ReponseEtudiant> {
    return this.http.put<ReponseEtudiant>(`${this.apiUrl}/reponse-etudiant/${id}`, reponseEtudiant);
  }

  deleteReponseEtudiant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/reponse-etudiant/${id}`);
  }

  getAllReponseEtudiants(): Observable<ReponseEtudiant[]> {
    return this.http.get<ReponseEtudiant[]>(`${this.apiUrl}/reponse-etudiant/all`);
  }
}
