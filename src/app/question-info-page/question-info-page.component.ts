import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Option } from './option';
import { Update } from './option';
import { Question } from './question';
import { QuestionService } from './question.service';


@Component({
  selector: 'app-question-info-page',
  templateUrl: './question-info-page.component.html',
  styleUrls: ['./question-info-page.component.css']
})
export class QuestionInfoPageComponent implements OnInit {

  question: Question;
  questionId: number;
  options: Option[] = [];
  votes: Number;
  update: Update;

  constructor(
    private questionService: QuestionService,
    private optionService: QuestionService,
    private voteService: QuestionService,

    //pegando parametro id da url e quandando ele em question id
    private route: ActivatedRoute
    ) {
      this.route.params.subscribe(params => this.questionId = params['id'])
     }

  ngOnInit(): void {
    this.getQuestionsById(this.questionId);
    this.getQuestionOptions(this.questionId)
  }
  ngOnChanges(): void {

  }

  // pega uma enquete com base no id
  getQuestionsById(id:number): void {
    this.questionService.getQuestionsById(id).subscribe({
      next: question=> {
        this.question = question

      },
      error:err => console.log('Error', err)
    })
  }
  //pega todas as opçoes da enquete
  getQuestionOptions(id:number): void {
    this.optionService.getQuestionOptions(id).subscribe({
      next: option=> {
        this.options = option

      },
      error:err => console.log('Error', err)
    })
  }

  //update em votos
  updateVote(id:number, body: number): void{
    this.voteService.updateVote(id, body).subscribe({
      next: vote=> {

        console.log(vote)
      },
      error:err => console.log('Error', err)
    })
  }

}
