import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Hekim } from 'src/app/models/hekim';
import { HekimService } from 'src/app/services/hekim.service';
import { HekimDeleteComponent } from '../hekim-delete/hekim-delete.component';
import { HekimUpdateComponent } from '../hekim-update/hekim-update.component';

@Component({
  selector: 'app-hekim',
  templateUrl: './hekim.component.html',
  styleUrls: ['./hekim.component.css'],
})
export class HekimComponent implements OnInit {
  hekims: Hekim[];
  dataLoaded = false;
  filterText = '';
  constructor(private hekimService: HekimService, private dialog:MatDialog) {}

  ngOnInit(): void {
    this.getHekims();
  }
  getHekims() {
    this.hekimService.getHekims().subscribe((response) => {
      this.hekims = response.data;
      this.dataLoaded = true;
    });
  }

  showHekimDeleteModal(hekim:Hekim){
    const hekimDeleteModal=this.dialog.open(HekimDeleteComponent,{
      disableClose:true,
      width:"%25"
    });
    hekimDeleteModal.componentInstance.deletedHekim=hekim;
    hekimDeleteModal.afterClosed().subscribe(result=>{
      this.ngOnInit();
    })
  }
  showHekimUpdateModal(hekim:Hekim) {
    const hekimUpdateModal = this.dialog.open(HekimUpdateComponent, {
      disableClose: true,
      width: "35%"
    });
    hekimUpdateModal.componentInstance.currentHekim = hekim;

    hekimUpdateModal.afterClosed().subscribe(result => {
      this.ngOnInit();
    })
  }
}
