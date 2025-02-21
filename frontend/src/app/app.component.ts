import { Component } from '@angular/core';
import { HeaderComponent } from './base/header/header.component';
import { FooterComponent } from './base/footer/footer.component';

import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export default class AppComponent {
  // goodReponseVerif(question : string): number{
  //   const numValue= Number(question)
  //   console.log(numValue)
  //   return numValue
   
  // }
  
}
