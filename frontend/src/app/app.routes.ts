import { Routes } from '@angular/router';
import { MainAccueilComponent } from './base/main-accueil/main-accueil.component';
import { MainQuestListComponent } from './Quest/main-quest-list/main-quest-list.component';
import { MemesComponent } from './memes/memes.component';
import { QuizzComponent } from './quizz/quizz.component';


export const routes: Routes = [
 {path:'',component:MainAccueilComponent},   
 {path:'allquest',component: MainQuestListComponent},   
 {path:'meme',component: MemesComponent},   
 {path:'quizz',component: QuizzComponent},   

 
];


