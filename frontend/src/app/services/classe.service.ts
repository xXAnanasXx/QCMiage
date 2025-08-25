import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Classe} from '../common/models/classe.model';

@Injectable({ providedIn: 'root' })
export class ClasseService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getClasse(id: number): Observable<Classe> {
    return this.http.get<Classe>(`${this.apiUrl}/classe/${id}`);
  }

  createClasse(classe: Classe): Observable<Classe> {
    return this.http.post<Classe>(`${this.apiUrl}/classe`, classe);
  }

  updateClasse(id: number, classe: Classe): Observable<Classe> {
    return this.http.put<Classe>(`${this.apiUrl}/classe/${id}`, classe);
  }

  deleteClasse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/classe/${id}`);
  }

  getAllClasses(): Observable<Classe[]> {
    return this.http.get<Classe[]>(`${this.apiUrl}/classe/all`);
  }
}
