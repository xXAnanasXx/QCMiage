import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {SessionQuestionnaire} from '../common/models/session-questionnaire.model';

@Injectable({ providedIn: 'root' })
export class SessionQuestionnaireService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSessionQuestionnaire(id: number): Observable<SessionQuestionnaire> {
    return this.http.get<SessionQuestionnaire>(`${this.apiUrl}/session-questionnaire/${id}`);
  }

  createSessionQuestionnaire(sessionQuestionnaire: SessionQuestionnaire): Observable<SessionQuestionnaire> {
    return this.http.post<SessionQuestionnaire>(`${this.apiUrl}/session-questionnaire`, sessionQuestionnaire);
  }

  updateSessionQuestionnaire(id: number, sessionQuestionnaire: SessionQuestionnaire): Observable<SessionQuestionnaire> {
    return this.http.put<SessionQuestionnaire>(`${this.apiUrl}/session-questionnaire/${id}`, sessionQuestionnaire);
  }

  deleteSessionQuestionnaire(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/session-questionnaire/${id}`);
  }

  getAllSessionQuestionnaires(): Observable<SessionQuestionnaire[]> {
    return this.http.get<SessionQuestionnaire[]>(`${this.apiUrl}/session-questionnaire/all`);
  }
}
