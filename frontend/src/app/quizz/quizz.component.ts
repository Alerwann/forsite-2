import { NgFor } from '@angular/common';
import { QuizzService } from './../services/quizz.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';


@Component({
  selector: 'app-quizz',
  imports: [MatListModule, MatRadioModule, MatButton,ReactiveFormsModule, NgFor ],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.scss'
})



export class QuizzComponent {

quizForm: FormGroup;

questions=[
  {
    id:'Question1',
    text:"Quel héro doit aller chercher Jade dans un portail?",
    correctAnswer:'1',
    verifGood:false,
    verifWrong:false,


  },
  {
    id:'Question2',
    text:"En quelle année Midas est apparu pour la première fois?",
    correctAnswer:'1',
    verifGood:false,
    verifWrong:false,
    
  } , 
  {
    id:'Question3',
    text:"Combien de temps environ le trou noir a duré en 2019?",
    correctAnswer:'1',
    verifGood:false,
    verifWrong:false,
   
  }
]



constructor(private fb: FormBuilder, private quizzService : QuizzService) {
  // Initialisation du formulaire
  this.quizForm = this.fb.group({
    Question1: ['', ],
    Question2: ['', ],
    Question3: ['', ]
  });
}


onSubmit():void{
    this.questions.forEach(q => {
      const selectedAnswer = this.quizForm.get(q.id)?.value;
      q.verifGood = selectedAnswer === q.correctAnswer;
      q.verifWrong = selectedAnswer !== q.correctAnswer;
    });
    const resultat = this.quizzService.calculScore(this.quizForm )
  }





  


 
  
  
  
  }



 
  


