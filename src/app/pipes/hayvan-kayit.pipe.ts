import { Pipe, PipeTransform } from '@angular/core';
import { HayvanTedavi } from '../models/hayvanTedavi';

@Pipe({
  name: 'hayvanKayit'
})
export class HayvanKayitPipe implements PipeTransform {

  transform(value: HayvanTedavi[], filterText: string): HayvanTedavi[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((h:HayvanTedavi)=>h.hayvanId.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
