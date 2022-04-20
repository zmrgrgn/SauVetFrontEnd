import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HayvanSahiplendirme } from 'src/app/models/hayvanSahiplendirme';
import { HayvanSahiplendirmeService } from 'src/app/services/hayvan-sahiplendirme.service';

@Component({
  selector: 'app-hayvan-sahiplendirme-delete',
  templateUrl: './hayvan-sahiplendirme-delete.component.html',
  styleUrls: ['./hayvan-sahiplendirme-delete.component.css']
})
export class HayvanSahiplendirmeDeleteComponent implements OnInit {
  deletedHayvanSahiplendirme:HayvanSahiplendirme;

  constructor(private deleteHayvanSahiplendirmeModal:MatDialogRef<HayvanSahiplendirmeDeleteComponent>,private hayvanSahiplendirmeService:HayvanSahiplendirmeService, private toastrService:ToastrService) { }

  ngOnInit(): void {
  }
  delete(hayvanSahiplendirme:HayvanSahiplendirme){
    this.hayvanSahiplendirmeService.delete(hayvanSahiplendirme).subscribe(response=>{
      this.toastrService.success(hayvanSahiplendirme.id+"Silindi","Silme işlemi başarılı!")
      this.closeHayvanSahiplendirmeDeleteModal();
    },errorResponse=>{
      this.toastrService.error(errorResponse.error.message,"Silme işlemi başarısız")
    })
  }

  closeHayvanSahiplendirmeDeleteModal(){
    this.deleteHayvanSahiplendirmeModal.close();
  }
}
