import { Component, OnInit } from '@angular/core';
import { BelediyeBilgi } from 'src/app/models/belediyeBilgi';
import { MatDialogRef } from '@angular/material/dialog';
import { BelediyeBilgiService } from 'src/app/services/belediye-bilgi.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-belediye-bilgi-delete',
  templateUrl: './belediye-bilgi-delete.component.html',
  styleUrls: ['./belediye-bilgi-delete.component.css']
})
export class BelediyeBilgiDeleteComponent implements OnInit {
  deletedBelediyeBilgi:BelediyeBilgi;

  constructor(private deleteBelediyeBilgiModal:MatDialogRef<BelediyeBilgiDeleteComponent>,private belediyeBilgiService:BelediyeBilgiService, private toastrService:ToastrService) {}

  ngOnInit(): void {
  }
  delete(belediyeBilgi:BelediyeBilgi){
    this.belediyeBilgiService.delete(belediyeBilgi).subscribe(response=>{
      this.toastrService.success(belediyeBilgi.belediyeAd+"Silindi","Silme işlemi başarılı!")
      this.closeBelediyeBilgiDeleteModal();
    },errorResponse=>{
      this.toastrService.error(errorResponse.error.message,"Silme işlemi başarısız")
    })
  }

  closeBelediyeBilgiDeleteModal(){
    this.deleteBelediyeBilgiModal.close();
  }

}
