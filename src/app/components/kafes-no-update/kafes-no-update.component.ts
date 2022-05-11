import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { KafesNo } from 'src/app/models/kafesNo';
import { ErrorService } from 'src/app/services/error.service';
import { FormService } from 'src/app/services/form.service';
import { KafesNoService } from 'src/app/services/kafes-no.service';

@Component({
  selector: 'app-kafes-no-update',
  templateUrl: './kafes-no-update.component.html',
  styleUrls: ['./kafes-no-update.component.css']
})
export class KafesNoUpdateComponent implements OnInit {

  currentKafesNo:KafesNo;
  kafesNoUpdateForm:FormGroup
  constructor(private kafesNoService:KafesNoService,private toastrService:ToastrService,private updateModal:MatDialogRef<KafesNoUpdateComponent>,private errorService:ErrorService,private formService:FormService) { }

  ngOnInit(): void {
    this.createKafesNoUpdateForm();
  }
  update() {
    if (this.kafesNoUpdateForm.valid) {
      let newKafesNo = Object.assign({}, this.kafesNoUpdateForm.value);
      newKafesNo.id = this.currentKafesNo.id;

      if (newKafesNo.kafesAdi == this.currentKafesNo.kafesAdi) {
        this.toastrService.error("Kafes Numarası eskisiyle aynı", "Güncelleme yapılmadı");
        return;
      }

      this.kafesNoService.update(newKafesNo).subscribe(() => {
        this.toastrService.success(this.currentKafesNo.kafesAdi + ", " + newKafesNo.kafesAdi + " şeklinde güncellendi", "Güncelleme başarılı");
        this.closeUpdateModal();
      }, errorResponse => {
        this.errorService.showBackendError(errorResponse, "Kafes Numarası güncelleme başarısız");
      })

    } else {
      this.toastrService.error("Kafes Numarası 2-50 karakter arasında olmalıdır", "Form geçersiz");
      this.kafesNoUpdateForm.reset();
    }
  }

  closeUpdateModal() {
    this.updateModal.close();
  }

  createKafesNoUpdateForm() {
    this.kafesNoUpdateForm = this.formService.createKafesNoForm();
  }
}
