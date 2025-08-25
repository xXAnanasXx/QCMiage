import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {ChoixQuestion} from '../common/models/choix-question.model';

@Injectable({ providedIn: 'root' })
export class ChoixQuestionService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getChoixQuestion(id: number): Observable<ChoixQuestion> {
    return this.http.get<ChoixQuestion>(`${this.apiUrl}/choix-question/${id}`);
  }

  createChoixQuestion(choixQuestion: ChoixQuestion): Observable<ChoixQuestion> {
    return this.http.post<ChoixQuestion>(`${this.apiUrl}/choix-question`, choixQuestion);
  }

  updateChoixQuestion(id: number, choixQuestion: ChoixQuestion): Observable<ChoixQuestion> {
    return this.http.put<ChoixQuestion>(`${this.apiUrl}/choix-question/${id}`, choixQuestion);
  }

  deleteChoixQuestion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/choix-question/${id}`);
  }

  getAllChoixQuestions(): Observable<ChoixQuestion[]> {
    return this.http.get<ChoixQuestion[]>(`${this.apiUrl}/choix-question/all`);
  }
}
