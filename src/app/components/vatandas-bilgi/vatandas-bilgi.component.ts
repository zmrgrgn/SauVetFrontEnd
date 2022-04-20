import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VatandasBilgi } from 'src/app/models/vatandasBilgi';
import { VatandasBilgiService } from 'src/app/services/vatandas-bilgi.service';
import { VatandasBilgiDeleteComponent } from '../vatandas-bilgi-delete/vatandas-bilgi-delete.component';
import { VatandasBilgiUpdateComponent } from '../vatandas-bilgi-update/vatandas-bilgi-update.component';

@Component({
  selector: 'app-vatandas-bilgi',
  templateUrl: './vatandas-bilgi.component.html',
  styleUrls: ['./vatandas-bilgi.component.css'],
})
export class VatandasBilgiComponent implements OnInit {
  vatandasBilgis: VatandasBilgi[];
  dataLoaded = false;
  filterText = '';
  constructor(private vatandasBilgiService: VatandasBilgiService, private dialog:MatDialog) {}

  ngOnInit(): void {
    this.getVatandasBilgis();
  }

  getVatandasBilgis() {
    this.vatandasBilgiService.getVatandasBilgis().subscribe((response) => {
      this.vatandasBilgis = response.data;
      this.dataLoaded = true;
    });
  }

  showVatandasBilgiDeleteModal(vatandasBilgi:VatandasBilgi){
    const vatandasBilgiDeleteModal=this.dialog.open(VatandasBilgiDeleteComponent,{
      disableClose:true,
      width:"%25"
    });
    vatandasBilgiDeleteModal.componentInstance.deletedVatandasBilgi=vatandasBilgi;
    vatandasBilgiDeleteModal.afterClosed().subscribe(result=>{
      this.ngOnInit();
    })
  }
  showVatandasBilgiUpdateModal(vatandasBilgi:VatandasBilgi) {
    const vatandasBilgiUpdateModal = this.dialog.open(VatandasBilgiUpdateComponent, {
      disableClose: true,
      width: "35%"
    });
    vatandasBilgiUpdateModal.componentInstance.currentVatandasBilgi = vatandasBilgi;

    vatandasBilgiUpdateModal.afterClosed().subscribe(result => {
      this.ngOnInit();
    })
  }
}
