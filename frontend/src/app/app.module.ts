import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MainAccueilComponent } from './main-accueil/main-accueil.component';
import { MainQuestListComponent } from './main-quest-list/main-quest-list.component';
import { HttpClient} from '@angular/common/http';




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



  
  
],
bootstrap: []

})
export class AppModule { }