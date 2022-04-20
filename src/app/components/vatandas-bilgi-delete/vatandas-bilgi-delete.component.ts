import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { VatandasBilgi } from 'src/app/models/vatandasBilgi';
import { VatandasBilgiService } from 'src/app/services/vatandas-bilgi.service';

@Component({
  selector: 'app-vatandas-bilgi-delete',
  templateUrl: './vatandas-bilgi-delete.component.html',
  styleUrls: ['./vatandas-bilgi-delete.component.css']
})
export class VatandasBilgiDeleteComponent implements OnInit {
deletedVatandasBilgi:VatandasBilgi;
  constructor(private deleteVatandasBilgiModal:MatDialogRef<VatandasBilgiDeleteComponent>,private vatandasBilgiService:VatandasBilgiService, private toastrService:ToastrService) {}

  ngOnInit(): void {
  }

  delete(vatandasBilgi:VatandasBilgi){
    this.vatandasBilgiService.delete(vatandasBilgi).subscribe(response=>{
      this.toastrService.success(vatandasBilgi.ad+"Silindi","Silme işlemi başarılı!")
      this.closeVatandasBilgiDeleteModal();
    },errorResponse=>{
      this.toastrService.error(errorResponse.error.message,"Silme işlemi başarısız")
    })
  }

  closeVatandasBilgiDeleteModal(){
    this.deleteVatandasBilgiModal.close();
  }

}
