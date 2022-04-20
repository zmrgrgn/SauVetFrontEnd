import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HayvanKayit } from 'src/app/models/hayvanKayit';
import { HayvanKayitService } from 'src/app/services/hayvan-kayit.service';
import { HayvanKayitDeleteComponent } from '../hayvan-kayit-delete/hayvan-kayit-delete.component';
import { HayvanKayitUpdateComponent } from '../hayvan-kayit-update/hayvan-kayit-update.component';

@Component({
  selector: 'app-hayvan-kayit',
  templateUrl: './hayvan-kayit.component.html',
  styleUrls: ['./hayvan-kayit.component.css'],
})
export class HayvanKayitComponent implements OnInit {
  hayvanKayits: HayvanKayit[];
  dataLoaded = false;
  filterText = '';

  constructor(private hayvanKayitService: HayvanKayitService, private dialog:MatDialog) {}

  ngOnInit(): void {
    this.getHayvanKayits();
  }
 
  getHayvanKayits() {
    this.hayvanKayitService.getHayvanKayits().subscribe((response) => {
      this.hayvanKayits = response.data;
      this.dataLoaded = true;
    });
  }

  showHayvanKayitDeleteModal(hayvanKayit:HayvanKayit){
    const hayvanKayitDeleteModal=this.dialog.open(HayvanKayitDeleteComponent,{
      disableClose:true,
      width:"%25"
    });
    hayvanKayitDeleteModal.componentInstance.deletedHayvanKayit=hayvanKayit;
    hayvanKayitDeleteModal.afterClosed().subscribe(result=>{
      this.ngOnInit();
    })
  }
  showHayvanKayitUpdateModal(hayvanKayit:HayvanKayit) {
    const hayvanKayitUpdateModal = this.dialog.open(HayvanKayitUpdateComponent, {
      disableClose: true,
      width: "35%"
    });
    hayvanKayitUpdateModal.componentInstance.currentHayvanKayit = hayvanKayit;

    hayvanKayitUpdateModal.afterClosed().subscribe(result => {
      this.ngOnInit();
    })
  }
}
