import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Hekim } from 'src/app/models/hekim';
import { HekimService } from 'src/app/services/hekim.service';

@Component({
  selector: 'app-hekim-delete',
  templateUrl: './hekim-delete.component.html',
  styleUrls: ['./hekim-delete.component.css']
})
export class HekimDeleteComponent implements OnInit {
deletedHekim:Hekim;
  constructor(private deleteHekimModal:MatDialogRef<HekimDeleteComponent>,private hekimService:HekimService, private toastrService:ToastrService) {}

  ngOnInit(): void {
  }
  delete(hekim:Hekim){
    this.hekimService.delete(hekim).subscribe(response=>{
      this.toastrService.success(hekim.ad+"Silindi","Silme işlemi başarılı!")
      this.closeHekimDeleteModal();
    },errorResponse=>{
      this.toastrService.error(errorResponse.error.message,"Silme işlemi başarısız")
    })
  }

  closeHekimDeleteModal(){
    this.deleteHekimModal.close();
  }
}
