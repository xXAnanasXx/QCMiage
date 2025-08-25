import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Question} from '../common/models/question.model';

@Injectable({ providedIn: 'root' })
export class QuestionService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getQuestion(id: number): Observable<Question> {
    return this.http.get<Question>(`${this.apiUrl}/question/${id}`);
  }

  createQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(`${this.apiUrl}/question`, question);
  }

  updateQuestion(id: number, question: Question): Observable<Question> {
    return this.http.put<Question>(`${this.apiUrl}/question/${id}`, question);
  }

  deleteQuestion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/question/${id}`);
  }

  getAllQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}/question/all`);
  }
}
