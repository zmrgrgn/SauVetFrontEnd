import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HayvanSahiplendirme } from 'src/app/models/hayvanSahiplendirme';
import { HayvanSahiplendirmeService } from 'src/app/services/hayvan-sahiplendirme.service';
import { HayvanSahiplendirmeDeleteComponent } from '../hayvan-sahiplendirme-delete/hayvan-sahiplendirme-delete.component';
import { HayvanSahiplendirmeUpdateComponent } from '../hayvan-sahiplendirme-update/hayvan-sahiplendirme-update.component';

@Component({
  selector: 'app-hayvan-sahiplendirme',
  templateUrl: './hayvan-sahiplendirme.component.html',
  styleUrls: ['./hayvan-sahiplendirme.component.css'],
})
export class HayvanSahiplendirmeComponent implements OnInit {
  hayvanSahiplendirmes: HayvanSahiplendirme[];
  dataLoaded = false;
  filterText = '';
  constructor(private hayvanSahiplendirmeService: HayvanSahiplendirmeService, private dialog:MatDialog) {}

  ngOnInit(): void {
    this.getHayvanSahiplendirmes();
  }
  getHayvanSahiplendirmes() {
    this.hayvanSahiplendirmeService
      .getHayvanSahiplendirmes()
      .subscribe((response) => {
        this.hayvanSahiplendirmes = response.data;
        this.dataLoaded = true;
      });
  }

  showHayvanSahiplendirmeDeleteModal(hayvanSahiplendirme:HayvanSahiplendirme){
    const hayvanSahiplendirmeDeleteModal=this.dialog.open(HayvanSahiplendirmeDeleteComponent,{
      disableClose:true,
      width:"%25"
    });
    hayvanSahiplendirmeDeleteModal.componentInstance.deletedHayvanSahiplendirme=hayvanSahiplendirme;
    hayvanSahiplendirmeDeleteModal.afterClosed().subscribe(result=>{
      this.ngOnInit();
    })
  }
  showHayvanSahiplendirmeUpdateModal(hayvanSahiplendirme:HayvanSahiplendirme) {
    const hayvanSahiplendirmeUpdateModal = this.dialog.open(HayvanSahiplendirmeUpdateComponent, {
      disableClose: true,
      width: "35%"
    });
    hayvanSahiplendirmeUpdateModal.componentInstance.currentHayvanSahiplendirme = hayvanSahiplendirme;

    hayvanSahiplendirmeUpdateModal.afterClosed().subscribe(result => {
      this.ngOnInit();
    })
  }
}
