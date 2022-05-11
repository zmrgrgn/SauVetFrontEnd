import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HayvanTur } from 'src/app/models/hayvanTur';
import { HayvanTurService } from 'src/app/services/hayvan-tur.service';

@Component({
  selector: 'app-hayvan-tur-delete',
  templateUrl: './hayvan-tur-delete.component.html',
  styleUrls: ['./hayvan-tur-delete.component.css']
})
export class HayvanTurDeleteComponent implements OnInit {
  deletedHayvanTur:HayvanTur;

  constructor(private deleteHayvanTurModal:MatDialogRef<HayvanTurDeleteComponent>,private hayvanTurService:HayvanTurService, private toastrService:ToastrService) {}

  ngOnInit(): void {
  }
  delete(hayvanTur:HayvanTur){
    this.hayvanTurService.delete(hayvanTur).subscribe(response=>{
      this.toastrService.success(hayvanTur.hayvanTurAd+"Silindi","Silme işlemi başarılı!")
      this.closeHayvanTurDeleteModal();
    },errorResponse=>{
      this.toastrService.error(errorResponse.error.message,"Silme işlemi başarısız")
    })
  }

  closeHayvanTurDeleteModal(){
    this.deleteHayvanTurModal.close();
  }

}
