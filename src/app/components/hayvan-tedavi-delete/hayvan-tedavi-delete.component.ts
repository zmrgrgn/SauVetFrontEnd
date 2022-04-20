import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HayvanTedavi } from 'src/app/models/hayvanTedavi';
import { HayvanTedaviService } from 'src/app/services/hayvan-tedavi.service';

@Component({
  selector: 'app-hayvan-tedavi-delete',
  templateUrl: './hayvan-tedavi-delete.component.html',
  styleUrls: ['./hayvan-tedavi-delete.component.css']
})
export class HayvanTedaviDeleteComponent implements OnInit {
deletedHayvanTedavi:HayvanTedavi;
  constructor(private deleteHayvanTedaviModal:MatDialogRef<HayvanTedaviDeleteComponent>,private hayvanTedaviService:HayvanTedaviService, private toastrService:ToastrService) { }

  ngOnInit(): void {
  }
  delete(hayvanTedavi:HayvanTedavi){
    this.hayvanTedaviService.delete(hayvanTedavi).subscribe(response=>{
      this.toastrService.success(hayvanTedavi.tedaviBaslik+"Silindi","Silme işlemi başarılı!")
      this.closeHayvanTedaviDeleteModal();
    },errorResponse=>{
      this.toastrService.error(errorResponse.error.message,"Silme işlemi başarısız")
    })
  }

  closeHayvanTedaviDeleteModal(){
    this.deleteHayvanTedaviModal.close();
  }

}
