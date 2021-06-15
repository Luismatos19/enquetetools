import { Question } from './question';
import { Option } from './option';
import { Update } from './option';
import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// permite que a classe seja carregada na root da aplicação
@Injectable({
  providedIn: 'root'
})

export class QuestionService{

  // url pra pegar uma enquete
  private apiUrl:string = 'http://127.0.0.1:3333/question/';
  private voteUrl:string = 'http://127.0.0.1:3333/option/';



  constructor(private httpClient: HttpClient) { }

  //metodo para pegar todas as questions
  getQuestionsById(id:number): Observable<Question> {
    return this.httpClient.get<Question>(`${this.apiUrl + id}`);

  }
  // busca todas as opçoes da enquete
  getQuestionOptions(id:number): Observable<Option[]>{
    // busca todas as opções da enquente na url /question/:id/option
    return this.httpClient.get<Option[]>(`${this.apiUrl}${id}/option`)
  }

  updateVote(id:number, body:number): Observable<{}>{
     return this.httpClient.patch(`${this.voteUrl + id}`, {vote: body} );
  }

}
