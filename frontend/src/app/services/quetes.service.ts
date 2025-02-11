import { Quest } from "../models/quest";

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { linkytb } from "../models/linkyt";


@Injectable({providedIn:'root'})

export class QueteService {
    constructor(private http: HttpClient){}

    getAllQuest(): Observable<Quest[]>{

        return this.http.get<Quest[]>('http://localhost:3000/quetes')
    }
    
    getAllLink(): Observable<linkytb[]>{
        return this.http.get<linkytb[]>('http://localhost:3000/linkytb')
    }
}