import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Quest } from '../../models/quest';
import { Component, Input, OnInit } from '@angular/core';

import { CommonModule,  } from '@angular/common';
import { RemoveHtmlTagsPipe } from '../../remove-html-tags.pipe';


@Component({
  selector: 'app-main-quest',
  imports: [CommonModule,RemoveHtmlTagsPipe],
  templateUrl: './main-quest.component.html',
  styleUrl: './main-quest.component.scss'
})


export class MainQuestComponent implements OnInit {

@Input() quest!: Quest

constructor(private sanatizer : DomSanitizer){}

linksafe !: SafeHtml;
htmlsafe !: SafeHtml;

ngOnInit(): void {
this.linksafe= this.sanatizer.bypassSecurityTrustHtml(this.quest.linkytb)
}
sanitizeDate(htmlsafe :string, name: string): SafeHtml{
  switch(name){
   case  'date' :  return this.htmlsafe=this.sanatizer.bypassSecurityTrustHtml(this.quest.date)
   case 'description':  return this.htmlsafe=this.sanatizer.bypassSecurityTrustHtml(this.quest.description)
   case 'lieux':  return this.htmlsafe=this.sanatizer.bypassSecurityTrustHtml(this.quest.lieux)
   case 'tips':  return this.htmlsafe=this.sanatizer.bypassSecurityTrustHtml(this.quest.tips)
  
   default: return this.htmlsafe=this.sanatizer.bypassSecurityTrustHtml('')

   break
  }
 }
}
