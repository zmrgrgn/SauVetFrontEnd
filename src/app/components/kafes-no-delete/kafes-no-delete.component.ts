import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { KafesNo } from 'src/app/models/kafesNo';
import { KafesNoService } from 'src/app/services/kafes-no.service';

@Component({
  selector: 'app-kafes-no-delete',
  templateUrl: './kafes-no-delete.component.html',
  styleUrls: ['./kafes-no-delete.component.css']
})
export class KafesNoDeleteComponent implements OnInit {
  deletedKafesNo:KafesNo;

  constructor(private deleteKafesNoModal:MatDialogRef<KafesNoDeleteComponent>,private kafesNoService:KafesNoService, private toastrService:ToastrService) {}

  ngOnInit(): void {
  }
  delete(kafesNo:KafesNo){
    this.kafesNoService.delete(kafesNo).subscribe(response=>{
      this.toastrService.success(kafesNo.kafesAdi+"Silindi","Silme işlemi başarılı!")
      this.closeKafesNoDeleteModal();
    },errorResponse=>{
      this.toastrService.error(errorResponse.error.message,"Silme işlemi başarısız")
    })
  }

  closeKafesNoDeleteModal(){
    this.deleteKafesNoModal.close();
  }

}
