import { Question } from './question';
import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// permite que a classe seja carregada na root da aplicação
@Injectable({
  providedIn: 'root'
})

export class HomeService{

  private apiurl:string = 'http://127.0.0.1:3333/question'

  constructor(private httpClient: HttpClient) { }

  //metodo para pegar todas as questions
  getQuestions(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(`${this.apiurl}`);

  }

}
