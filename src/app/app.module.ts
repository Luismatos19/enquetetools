import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    RouterModule.forRoot([
     {
        path: '' , component: HomeComponent
     }
    ]),
    [HttpClientModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
