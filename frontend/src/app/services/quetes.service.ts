import { Quest } from "../models/quest";

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { DomSanitizer } from "@angular/platform-browser";


@Injectable({providedIn:'root'})

export class QueteService {

    
    constructor(private http: HttpClient, private sanatizer: DomSanitizer){}

    getAllQuest(): Observable<Quest[]>{

        return this.http.get<Quest[]>('http://localhost:3000/quetes')}
    
  
    }
