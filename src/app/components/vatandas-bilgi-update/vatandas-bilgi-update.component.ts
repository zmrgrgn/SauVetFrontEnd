import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { VatandasBilgi } from 'src/app/models/vatandasBilgi';
import { ErrorService } from 'src/app/services/error.service';
import { FormService } from 'src/app/services/form.service';
import { VatandasBilgiService } from 'src/app/services/vatandas-bilgi.service';

@Component({
  selector: 'app-vatandas-bilgi-update',
  templateUrl: './vatandas-bilgi-update.component.html',
  styleUrls: ['./vatandas-bilgi-update.component.css']
})
export class VatandasBilgiUpdateComponent implements OnInit {
  currentVatandasBilgi:VatandasBilgi;
  vatandasBilgiUpdateForm:FormGroup
  constructor(private service:VatandasBilgiService,private toastrService:ToastrService,private updateModal:MatDialogRef<VatandasBilgiUpdateComponent>,private errorService:ErrorService,private formService:FormService) { }


  ngOnInit(): void {
    this.createVatandasBilgiUpdateForm();
  }
  update() {
    if (this.vatandasBilgiUpdateForm.valid) {
      let newVatandasBilgi = Object.assign({}, this.vatandasBilgiUpdateForm.value);
      newVatandasBilgi.id = this.currentVatandasBilgi.id;


      this.service.update(newVatandasBilgi).subscribe(() => {
        this.toastrService.success( "Güncelleme başarılı");
        this.closeUpdateModal();
      }, errorResponse => {
        this.errorService.showBackendError(errorResponse, "Güncelleme başarısız");
      })

    } else {
      this.toastrService.error("Form geçersiz");
      this.vatandasBilgiUpdateForm.reset();
    }
  }

  closeUpdateModal() {
    this.updateModal.close();
  }

  createVatandasBilgiUpdateForm() {
    this.vatandasBilgiUpdateForm = this.formService.createVatandasBilgiForm();
  }
}
