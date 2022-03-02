import { Pipe, PipeTransform } from '@angular/core';
import { HayvanKayit } from '../models/hayvanKayit';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: HayvanKayit[], filterText: string): HayvanKayit[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((h:HayvanKayit)=>h.ad.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
