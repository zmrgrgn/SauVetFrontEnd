import { Component, OnInit } from '@angular/core';
import { BelediyeBilgi } from 'src/app/models/belediyeBilgi';
import { BelediyeBilgiService } from 'src/app/services/belediye-bilgi.service';

@Component({
  selector: 'app-belediye-bilgi',
  templateUrl: './belediye-bilgi.component.html',
  styleUrls: ['./belediye-bilgi.component.css'],
})
export class BelediyeBilgiComponent implements OnInit {
  belediyeBilgis: BelediyeBilgi[] = [];
  dataLoaded = false;
  filterText = '';
  constructor(private belediyeBilgiService: BelediyeBilgiService) {}

  ngOnInit(): void {
    this.getBelediyeBilgis();
  }
  getBelediyeBilgis() {
    this.belediyeBilgiService.getBelediyeBilgis().subscribe((response) => {
      this.belediyeBilgis = response.data;
      this.dataLoaded = true;
    });
  }
}
