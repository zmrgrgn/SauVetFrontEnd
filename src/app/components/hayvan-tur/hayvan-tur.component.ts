import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HayvanTur } from 'src/app/models/hayvanTur';
import { HayvanTurService } from 'src/app/services/hayvan-tur.service';
import { HayvanTurDeleteComponent } from '../hayvan-tur-delete/hayvan-tur-delete.component';
import { HayvanTurUpdateComponent } from '../hayvan-tur-update/hayvan-tur-update.component';

@Component({
  selector: 'app-hayvan-tur',
  templateUrl: './hayvan-tur.component.html',
  styleUrls: ['./hayvan-tur.component.css']
})
export class HayvanTurComponent implements OnInit {
  hayvanTurs: HayvanTur[];
  dataLoaded = false;
  filterText = '';
  constructor(private hayvanTurService: HayvanTurService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getHayvanTurs();
  }
  getHayvanTurs() {
    this.hayvanTurService.getHayvanTurs().subscribe((response) => {
      this.hayvanTurs = response.data;
      this.dataLoaded = true;
    });
  }
  showHayvanTurDeleteModal(hayvanTur:HayvanTur){
    const hayvanTurDeleteModal=this.dialog.open(HayvanTurDeleteComponent,{
      disableClose:true,
      width:"%25"
    });
    hayvanTurDeleteModal.componentInstance.deletedHayvanTur=hayvanTur;
    hayvanTurDeleteModal.afterClosed().subscribe(result=>{
      this.ngOnInit();
    })
  }
  showHayvanTurUpdateModal(hayvanTur:HayvanTur) {
    const hayvanTurUpdateModal = this.dialog.open(HayvanTurUpdateComponent, {
      disableClose: true,
      width: "35%"
    });
    hayvanTurUpdateModal.componentInstance.currentHayvanTur = hayvanTur;

    hayvanTurUpdateModal.afterClosed().subscribe(result => {
      this.ngOnInit();
    })
  }
}
