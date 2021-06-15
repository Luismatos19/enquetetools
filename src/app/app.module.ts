import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { QuestionInfoPageComponent } from './question-info-page/question-info-page.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CardComponent,
    QuestionInfoPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    RouterModule.forRoot([
     {
        path: '' , component: HomeComponent
     },
     {
        path: 'enquetes/info/:id' , component: QuestionInfoPageComponent
     }
    ]),
    [HttpClientModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
