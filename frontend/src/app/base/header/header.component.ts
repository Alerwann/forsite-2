import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { QueteService } from '../../services/quetes.service';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-header',
  imports: [RouterLink,
    RouterLinkActive, MatButtonModule,MatMenuModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  {
constructor(private queteService :QueteService){}
  onLinkClick(type:string){
    this.queteService.sendData(type)
  }


}
