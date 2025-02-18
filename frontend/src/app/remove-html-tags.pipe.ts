import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeHtmlTags'
})
export class RemoveHtmlTagsPipe implements PipeTransform {

  transform(html: string):  string {
 
    return html.replace(/<[^>]*>/g, ''); 
  }

}
