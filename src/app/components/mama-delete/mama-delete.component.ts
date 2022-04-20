import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Mama } from 'src/app/models/mama';
import { MamaService } from 'src/app/services/mama.service';

@Component({
  selector: 'app-mama-delete',
  templateUrl: './mama-delete.component.html',
  styleUrls: ['./mama-delete.component.css']
})
export class MamaDeleteComponent implements OnInit {
deletedMama:Mama;
  constructor(private deleteMamaModal:MatDialogRef<MamaDeleteComponent>,private mamaService:MamaService, private toastrService:ToastrService) {}

  ngOnInit(): void {
  }
  delete(mama:Mama){
    this.mamaService.delete(mama).subscribe(response=>{
      this.toastrService.success(mama.ad+"Silindi","Silme işlemi başarılı!")
      this.closeMamaDeleteModal();
    },errorResponse=>{
      this.toastrService.error(errorResponse.error.message,"Silme işlemi başarısız")
    })
  }

  closeMamaDeleteModal(){
    this.deleteMamaModal.close();
  }
}
