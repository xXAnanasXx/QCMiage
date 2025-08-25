import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {SessionEtudiant} from '../common/models/session-etudiant.model';

@Injectable({ providedIn: 'root' })
export class SessionEtudiantService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSessionEtudiant(id: number): Observable<SessionEtudiant> {
    return this.http.get<SessionEtudiant>(`${this.apiUrl}/session-etudiant/${id}`);
  }

  createSessionEtudiant(sessionEtudiant: SessionEtudiant): Observable<SessionEtudiant> {
    return this.http.post<SessionEtudiant>(`${this.apiUrl}/session-etudiant`, sessionEtudiant);
  }

  updateSessionEtudiant(id: number, sessionEtudiant: SessionEtudiant): Observable<SessionEtudiant> {
    return this.http.put<SessionEtudiant>(`${this.apiUrl}/session-etudiant/${id}`, sessionEtudiant);
  }

  deleteSessionEtudiant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/session-etudiant/${id}`);
  }

  getAllSessionEtudiants(): Observable<SessionEtudiant[]> {
    return this.http.get<SessionEtudiant[]>(`${this.apiUrl}/session-etudiant/all`);
  }
}
