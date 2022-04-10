import { Component, OnInit } from '@angular/core';
import { HayvanTedavi } from 'src/app/models/hayvanTedavi';
import { HayvanTedaviService } from 'src/app/services/hayvan-tedavi.service';

@Component({
  selector: 'app-hayvan-tedavi',
  templateUrl: './hayvan-tedavi.component.html',
  styleUrls: ['./hayvan-tedavi.component.css'],
})
export class HayvanTedaviComponent implements OnInit {
  hayvanTedavis: HayvanTedavi[] = [];
  dataLoaded = false;
  filterText = '';
  constructor(private hayvanTedaviService: HayvanTedaviService) {}

  ngOnInit(): void {
    this.getHayvanTedavis();
  }
  getHayvanTedavis() {
    this.hayvanTedaviService.getHayvanTedavis().subscribe((response) => {
      this.hayvanTedavis = response.data;
      this.dataLoaded = true;
    });
  }
}
