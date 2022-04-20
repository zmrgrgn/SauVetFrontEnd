import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HayvanTedavi } from 'src/app/models/hayvanTedavi';
import { HayvanTedaviService } from 'src/app/services/hayvan-tedavi.service';
import { HayvanTedaviDeleteComponent } from '../hayvan-tedavi-delete/hayvan-tedavi-delete.component';
import { HayvanTedaviUpdateComponent } from '../hayvan-tedavi-update/hayvan-tedavi-update.component';

@Component({
  selector: 'app-hayvan-tedavi',
  templateUrl: './hayvan-tedavi.component.html',
  styleUrls: ['./hayvan-tedavi.component.css'],
})
export class HayvanTedaviComponent implements OnInit {
  hayvanTedavis: HayvanTedavi[];
  dataLoaded = false;
  filterText = '';
  constructor(private hayvanTedaviService: HayvanTedaviService, private dialog:MatDialog) {}

  ngOnInit(): void {
    this.getHayvanTedavis();
  }
  getHayvanTedavis() {
    this.hayvanTedaviService.getHayvanTedavis().subscribe((response) => {
      this.hayvanTedavis = response.data;
      this.dataLoaded = true;
    });
  }

  showHayvanTedaviDeleteModal(hayvanTedavi:HayvanTedavi){
    const hayvanTedaviDeleteModal=this.dialog.open(HayvanTedaviDeleteComponent,{
      disableClose:true,
      width:"%25"
    });
    hayvanTedaviDeleteModal.componentInstance.deletedHayvanTedavi=hayvanTedavi;
    hayvanTedaviDeleteModal.afterClosed().subscribe(result=>{
      this.ngOnInit();
    })
  }
  showHayvanTedaviUpdateModal(hayvanTedavi:HayvanTedavi) {
    const hayvanTedaviUpdateModal = this.dialog.open(HayvanTedaviUpdateComponent, {
      disableClose: true,
      width: "35%"
    });
    hayvanTedaviUpdateModal.componentInstance.currentHayvanTedavi = hayvanTedavi;

    hayvanTedaviUpdateModal.afterClosed().subscribe(result => {
      this.ngOnInit();
    })
  }
}
