import { keyframes } from "@angular/animations";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { Question } from "../models/quizz";
import { HttpClient } from "@angular/common/http";


@Injectable({providedIn:'root'})

export class QuizzService {
      constructor(private http: HttpClient){}
    




getQuestions():Observable<Question[]> {
     return this.http.get<Question[]>('http://localhost:3000/quizz');}


}






 

