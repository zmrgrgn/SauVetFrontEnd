import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Mama } from 'src/app/models/mama';
import { MamaService } from 'src/app/services/mama.service';
import { MamaDeleteComponent } from '../mama-delete/mama-delete.component';
import { MamaUpdateComponent } from '../mama-update/mama-update.component';

@Component({
  selector: 'app-mama',
  templateUrl: './mama.component.html',
  styleUrls: ['./mama.component.css'],
})
export class MamaComponent implements OnInit {
  mamas: Mama[];
  dataLoaded = false;
  filterText = '';
  constructor(private mamaService: MamaService, private dialog:MatDialog) {}

  ngOnInit(): void {
    this.getMamas();
  }
  getMamas() {
    this.mamaService.getMamas().subscribe((response) => {
      this.mamas = response.data;
      this.dataLoaded = true;
    });
  }

  showMamaDeleteModal(mama:Mama){
    const mamaDeleteModal=this.dialog.open(MamaDeleteComponent,{
      disableClose:true,
      width:"%25"
    });
    mamaDeleteModal.componentInstance.deletedMama=mama;
    mamaDeleteModal.afterClosed().subscribe(result=>{
      this.ngOnInit();
    })
  }
  showMamaUpdateModal(mama:Mama) {
    const mamaUpdateModal = this.dialog.open(MamaUpdateComponent, {
      disableClose: true,
      width: "35%"
    });
    mamaUpdateModal.componentInstance.currentMama = mama;

    mamaUpdateModal.afterClosed().subscribe(result => {
      this.ngOnInit();
    })
  }
}
