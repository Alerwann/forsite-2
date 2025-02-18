import { keyframes } from "@angular/animations";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable({providedIn:'root'})

export class QuizzService {
    


valueInNumber(value:any): number{
   const selectvalue: string =value
    const numevalue = Number(selectvalue)
    return numevalue
} 

calculScore(formGroup:FormGroup):number{
    console.log(formGroup.value)
    let result :number=0
    Object.values(formGroup.value).forEach(key => {
    
        const numVal= this.valueInNumber(key)

         if(numVal===1){
            result++
         }
       
       });

       return result  
}



}


 

