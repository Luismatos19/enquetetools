import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Question } from './question';




@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //cria um array vazio no modelo question
  questions: Question[] = [];

  //define constructor do tipo homeservice
  constructor(private questionService: HomeService) {  }

  ngOnInit(): void {
    //quando o componente iniciado chama a função
    this.getAll();
  }


  //seta question com o obtidos na resposta da requisião metodo do service
  getAll(): void {
    this.questionService.getQuestions().subscribe({
      next: questions => {
        this.questions = questions
      },
      error:err => console.log('Error', err)
    })
  }
}

