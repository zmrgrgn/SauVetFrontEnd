import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HayvanKayit } from 'src/app/models/hayvanKayit';
import { HayvanKayitService } from 'src/app/services/hayvan-kayit.service';

@Component({
  selector: 'app-hayvan-kayit-delete',
  templateUrl: './hayvan-kayit-delete.component.html',
  styleUrls: ['./hayvan-kayit-delete.component.css']
})
export class HayvanKayitDeleteComponent implements OnInit {
  deletedHayvanKayit:HayvanKayit;

  constructor(private deleteHayvanKayitModal:MatDialogRef<HayvanKayitDeleteComponent>,private hayvanKayitService:HayvanKayitService, private toastrService:ToastrService) { }

  ngOnInit(): void {
  }
  delete(hayvanKayit:HayvanKayit){
    this.hayvanKayitService.delete(hayvanKayit).subscribe(response=>{
      this.toastrService.success(hayvanKayit.ad+"Silindi","Silme işlemi başarılı!")
      this.closeHayvanKayitDeleteModal();
    },errorResponse=>{
      this.toastrService.error(errorResponse.error.message,"Silme işlemi başarısız")
    })
  }

  closeHayvanKayitDeleteModal(){
    this.deleteHayvanKayitModal.close();
  }
}
