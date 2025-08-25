import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Questionnaire} from '../common/models/questionnaire.model';

@Injectable({ providedIn: 'root' })
export class QuestionnaireService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getQuestionnaire(id: number): Observable<Questionnaire> {
    return this.http.get<Questionnaire>(`${this.apiUrl}/questionnaire/${id}`);
  }

  createQuestionnaire(questionnaire: Questionnaire): Observable<Questionnaire> {
    return this.http.post<Questionnaire>(`${this.apiUrl}/questionnaire`, questionnaire);
  }

  updateQuestionnaire(id: number, questionnaire: Questionnaire): Observable<Questionnaire> {
    return this.http.put<Questionnaire>(`${this.apiUrl}/questionnaire/${id}`, questionnaire);
  }

  deleteQuestionnaire(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/questionnaire/${id}`);
  }

  getAllQuestionnaires(): Observable<Questionnaire[]> {
    return this.http.get<Questionnaire[]>(`${this.apiUrl}/questionnaire/all`);
  }
}
