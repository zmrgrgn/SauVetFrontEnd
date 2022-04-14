import { Component, OnInit } from '@angular/core';
import { BelediyeBilgi } from 'src/app/models/belediyeBilgi';
import { BelediyeBilgiService } from 'src/app/services/belediye-bilgi.service';
import { MatDialog } from '@angular/material/dialog';
import { BelediyeBilgiDeleteComponent } from '../belediye-bilgi-delete/belediye-bilgi-delete.component';

@Component({
  selector: 'app-belediye-bilgi',
  templateUrl: './belediye-bilgi.component.html',
  styleUrls: ['./belediye-bilgi.component.css'],
})
export class BelediyeBilgiComponent implements OnInit {
  belediyeBilgis: BelediyeBilgi[];
  dataLoaded = false;
  filterText = '';
  constructor(private belediyeBilgiService: BelediyeBilgiService, private dialog:MatDialog) {}

  ngOnInit(): void {
    this.getBelediyeBilgis();
  }

  getBelediyeBilgis() {
    this.belediyeBilgiService.getBelediyeBilgis().subscribe((response) => {
      this.belediyeBilgis = response.data;
      this.dataLoaded = true;
    });
  }

  showBelediyeBilgiDeleteModal(belediyeBilgi:BelediyeBilgi){
    const belediyeBilgiDeleteModal=this.dialog.open(BelediyeBilgiDeleteComponent,{
      disableClose:true,
      width:"%25"
    });
    belediyeBilgiDeleteModal.componentInstance.deletedBelediyeBilgi=belediyeBilgi;
    belediyeBilgiDeleteModal.afterClosed().subscribe(result=>{
      this.ngOnInit();
    })
  }
}
