import { Component, OnInit } from '@angular/core';
import { VatandasBilgi } from 'src/app/models/vatandasBilgi';
import { VatandasBilgiService } from 'src/app/services/vatandas-bilgi.service';

@Component({
  selector: 'app-vatandas-bilgi',
  templateUrl: './vatandas-bilgi.component.html',
  styleUrls: ['./vatandas-bilgi.component.css'],
})
export class VatandasBilgiComponent implements OnInit {
  vatandasBilgis: VatandasBilgi[] = [];
  dataLoaded = false;
  filterText = '';
  constructor(private vatandasBilgiService: VatandasBilgiService) {}

  ngOnInit(): void {
    this.getVatandasBilgis();
  }

  getVatandasBilgis() {
    this.vatandasBilgiService.getVatandasBilgis().subscribe((response) => {
      this.vatandasBilgis = response.data;
      this.dataLoaded = true;
    });
  }
}
