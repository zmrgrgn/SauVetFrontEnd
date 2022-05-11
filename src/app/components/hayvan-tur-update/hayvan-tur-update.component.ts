import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HayvanTur } from 'src/app/models/hayvanTur';
import { ErrorService } from 'src/app/services/error.service';
import { FormService } from 'src/app/services/form.service';
import { HayvanTurService } from 'src/app/services/hayvan-tur.service';

@Component({
  selector: 'app-hayvan-tur-update',
  templateUrl: './hayvan-tur-update.component.html',
  styleUrls: ['./hayvan-tur-update.component.css']
})
export class HayvanTurUpdateComponent implements OnInit {
  currentHayvanTur:HayvanTur;
  hayvanTurUpdateForm:FormGroup
  constructor(private hayvanTurService:HayvanTurService,private toastrService:ToastrService,private updateModal:MatDialogRef<HayvanTurUpdateComponent>,private errorService:ErrorService,private formService:FormService) { }

  ngOnInit(): void {
    this.createHayvanTurUpdateForm();
  }
  update() {
    if (this.hayvanTurUpdateForm.valid) {
      let newHayvanTur = Object.assign({}, this.hayvanTurUpdateForm.value);
      newHayvanTur.id = this.currentHayvanTur.id;

      if (newHayvanTur.hayvanTurAd == this.currentHayvanTur.hayvanTurAd) {
        this.toastrService.error("Hayvan Türü adı eskisiyle aynı", "Güncelleme yapılmadı");
        return;
      }

      this.hayvanTurService.update(newHayvanTur).subscribe(() => {
        this.toastrService.success(this.currentHayvanTur.hayvanTurAd + ", " + newHayvanTur.hayvanTurAd + " şeklinde güncellendi", "Güncelleme başarılı");
        this.closeUpdateModal();
      }, errorResponse => {
        this.errorService.showBackendError(errorResponse, "Hayvan Türü adı güncelleme başarısız");
      })

    } else {
      this.toastrService.error("Hayvan Türü adı 2-50 karakter arasında olmalıdır", "Form geçersiz");
      this.hayvanTurUpdateForm.reset();
    }
  }

  closeUpdateModal() {
    this.updateModal.close();
  }

  createHayvanTurUpdateForm() {
    this.hayvanTurUpdateForm = this.formService.createHayvanTurForm();
  }
}
