import { Pipe, PipeTransform } from '@angular/core';
import { HayvanSahiplendirme } from '../models/hayvanSahiplendirme';
import { HayvanTedavi } from '../models/hayvanTedavi';

@Pipe({
  name: 'hayvanTedaviAd'
})
export class HayvanTedaviAdPipe implements PipeTransform {

  transform(value: HayvanSahiplendirme[], filterText: string): HayvanSahiplendirme[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((h:HayvanSahiplendirme)=>h.hayvanId.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
