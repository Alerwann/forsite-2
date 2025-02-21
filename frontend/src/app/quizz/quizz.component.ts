import { Question } from './../models/quizz';
import { CommonModule, NgFor } from '@angular/common';
import { QuizzService } from './../services/quizz.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';



@Component({
  selector: 'app-quizz',
  imports: [MatListModule, MatRadioModule, MatButton,ReactiveFormsModule, NgFor, CommonModule ],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.scss'
})



export class QuizzComponent implements OnInit {

quizzform !: FormGroup

private questionsSubject = new BehaviorSubject<Question[]>([]);
questions$ = this.questionsSubject.asObservable();

result:number | undefined


constructor(private quizzService: QuizzService,private FormBuilder : FormBuilder,    private cdr: ChangeDetectorRef
){
  this.quizzform=this.FormBuilder.group({})
}
ngOnInit(): void {
 this.questions$= this.quizzService.getQuestions()



this.questions$.subscribe(questions =>{
  const formControls: { [key: string]: any } = {};
  questions.forEach(question=>{
    formControls[question.id.toString()]=[''];
  });
  this.quizzform =this.FormBuilder.group(formControls)
},

);

 
}
onSubmit(): void {

  const formValues = this.quizzform.value;
  this.result = 0; 

  this.questions$ = this.questions$.pipe(
    map(questions => {
      let score = 0; // Variable locale pour calculer le score

      const updatedQuestions = questions.map(question => {
        const userAnswer = formValues[question.id.toString()];
        const correctAnswer = question.correctAnswer.toString();

        if (userAnswer === correctAnswer) {
          score++; // Incrémenter le score local
          return {
            ...question,
            verifGood: true,
            verifWrong: false,
          };
        } else {
          return {
            ...question,
            verifGood: false,
            verifWrong: true,
          };
        }
      });
      this.result = score; // Mettre à jour this.score une seule fois
      return updatedQuestions;
    })
  );


    }

resetQuiz() {
      // Réinitialiser les questions pas ok pour styel
      const questions = this.questionsSubject.getValue().map(question => ({
        ...question,
        verifGood: false,
        verifWrong: false
      }));
      this.questionsSubject.next(questions);
      console.log('Questions réinitialisées :', questions);
      
   
    
  
      // Réinitialiser le formulaire
      this.quizzform.reset();
      console.log('Formulaire réinitialisé.');
  
      // Réinitialiser le score
      this.result = undefined;
      console.log('Score réinitialisé :', this.result);
  
      // Forcer la détection des changements
      this.cdr.detectChanges();
    }
  }



 

