import { Quest } from "../models/quest";

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map, BehaviorSubject } from "rxjs";



@Injectable({providedIn:'root'})

export class QueteService {
    
    private typeSubject =new BehaviorSubject<string>('')

    public type$ =this.typeSubject.asObservable();
    
    constructor(private http: HttpClient){}
   
    getOneTypeQuest(type:string): Observable<Quest[]>{
        if(type==='all'){ 
           
            return this.http.get<Quest[]>('http://localhost:3000/quetes');}

        else{  
            return this.http.get<Quest[]>('http://localhost:3000/quetes').pipe(
            
            map(items=> items.filter(item=> item.type===type)),

        
        )}

     
      
    }

    sendData(type:string){
    this.typeSubject.next(type)
    }
    }



 

