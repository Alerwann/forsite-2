
import { QueteService } from '../../services/quetes.service';
import { Observable, switchMap, of } from 'rxjs';
import { Quest } from '../../models/quest';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainQuestComponent } from '../main-quest/main-quest.component';

@Component({
  selector: 'app-main-quest-list',
  imports: [MainQuestComponent,CommonModule],
  templateUrl: './main-quest-list.component.html',
  styleUrl: './main-quest-list.component.scss'
})


export class MainQuestListComponent implements OnInit{

  quetes$: Observable<Quest[]>= of([])
 
  type!: string
 receiveDate!: string

  constructor(private queteService: QueteService){}

  ngOnInit(): void {


    this.quetes$ = this.queteService.type$.pipe(
      switchMap(type => {
       
         console.log(type)
          return this.queteService.getOneTypeQuest(type);
        
      })
    );
  }
  }


  
  
  
    