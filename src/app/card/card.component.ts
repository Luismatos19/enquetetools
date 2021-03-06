import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges {


  //valor a ser recebido pela tag desse componente
  @Input()
    idQuestion: number;
  @Input()
    title: String;
  @Input()
    description: String;


  ngOnChanges(): void {
  }

}
