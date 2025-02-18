import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MainAccueilComponent } from './base/main-accueil/main-accueil.component';
import { MainQuestListComponent } from './Quest/main-quest-list/main-quest-list.component';
import { QuizzComponent } from './quizz/quizz.component';



@NgModule({
  declarations: [],

imports: [
 CommonModule,
  FormsModule,
  BrowserModule,
  AppRoutingModule,
  ReactiveFormsModule,
  MainAccueilComponent,
  MainQuestListComponent,
  QuizzComponent




  
  
],
bootstrap: []

})
export class AppModule { }