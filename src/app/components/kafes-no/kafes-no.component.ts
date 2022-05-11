import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KafesNo } from 'src/app/models/kafesNo';
import { KafesNoService } from 'src/app/services/kafes-no.service';
import { KafesNoDeleteComponent } from '../kafes-no-delete/kafes-no-delete.component';
import { KafesNoUpdateComponent } from '../kafes-no-update/kafes-no-update.component';

@Component({
  selector: 'app-kafes-no',
  templateUrl: './kafes-no.component.html',
  styleUrls: ['./kafes-no.component.css']
})
export class KafesNoComponent implements OnInit {
  kafesNos: KafesNo[];
  dataLoaded = false;
  filterText = '';
  constructor(private kafesNoService: KafesNoService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getKafesNos();
  }
  getKafesNos() {
    this.kafesNoService.getKafesNos().subscribe((response) => {
      this.kafesNos = response.data;
      this.dataLoaded = true;
    });
  }
  showKafesNoDeleteModal(kafesNo:KafesNo){
    const kafesNoDeleteModal=this.dialog.open(KafesNoDeleteComponent,{
      disableClose:true,
      width:"%25"
    });
    kafesNoDeleteModal.componentInstance.deletedKafesNo=kafesNo;
    kafesNoDeleteModal.afterClosed().subscribe(result=>{
      this.ngOnInit();
    })
  }
  showKafesNoUpdateModal(kafesNo:KafesNo) {
    const kafesNoUpdateModal = this.dialog.open(KafesNoUpdateComponent, {
      disableClose: true,
      width: "35%"
    });
    kafesNoUpdateModal.componentInstance.currentKafesNo = kafesNo;

  kafesNoUpdateModal.afterClosed().subscribe(result => {
      this.ngOnInit();
    })
  }
}
