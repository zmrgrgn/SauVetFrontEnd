import { Component, OnInit } from '@angular/core';
import { HayvanSahiplendirme } from 'src/app/models/hayvanSahiplendirme';
import { HayvanSahiplendirmeService } from 'src/app/services/hayvan-sahiplendirme.service';

@Component({
  selector: 'app-hayvan-sahiplendirme',
  templateUrl: './hayvan-sahiplendirme.component.html',
  styleUrls: ['./hayvan-sahiplendirme.component.css'],
})
export class HayvanSahiplendirmeComponent implements OnInit {
  hayvanSahiplendirmes: HayvanSahiplendirme[] = [];
  dataLoaded = false;
  filterText = '';
  constructor(private hayvanSahiplendirmeService: HayvanSahiplendirmeService) {}

  ngOnInit(): void {
    this.getHayvanSahiplendirmes();
  }
  getHayvanSahiplendirmes() {
    this.hayvanSahiplendirmeService
      .getHayvanSahiplendirmes()
      .subscribe((response) => {
        this.hayvanSahiplendirmes = response.data;
        this.dataLoaded = true;
      });
  }
}
