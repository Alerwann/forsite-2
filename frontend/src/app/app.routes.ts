import { Routes } from '@angular/router';
import { MainAccueilComponent } from './main-accueil/main-accueil.component';
import { MainQuestListComponent } from './main-quest-list/main-quest-list.component';


export const routes: Routes = [
 {path:'',component:MainAccueilComponent},   
 {path:'listof',component: MainQuestListComponent}   
 
];


