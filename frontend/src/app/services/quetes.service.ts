import { Quest } from "../models/quest";

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map, BehaviorSubject } from "rxjs";

import { DomSanitizer, SafeHtml } from "@angular/platform-browser";


@Injectable({providedIn:'root'})

export class QueteService {
    
    safeIframe !: SafeHtml
    quest !:Quest

    private typeSubject =new BehaviorSubject<string>('')

    public type$ =this.typeSubject.asObservable();
    
    constructor(private http: HttpClient, private sanatizer: DomSanitizer){}
    // getAllQuest():Observable<Quest[]>{
 
    //     return this.http.get<Quest[]>('http://localhost:3000/quetes');
    //     }
    getOneTypeQuest(type:string): Observable<Quest[]>{
        if(type==='all'){ 
            console.log("all")
            return this.http.get<Quest[]>('http://localhost:3000/quetes');}

        else{  console.log(type)
            return this.http.get<Quest[]>('http://localhost:3000/quetes').pipe(
            
            map(items=> items.filter(item=> item.type===type)),

        
        )}

     
      
    }

    sendData(type:string){
    this.typeSubject.next(type)
    console.log(type)}
    }



 

