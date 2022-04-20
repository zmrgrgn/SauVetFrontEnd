import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BelediyeBilgi } from 'src/app/models/belediyeBilgi';
import { BelediyeBilgiService } from 'src/app/services/belediye-bilgi.service';
import { ErrorService } from 'src/app/services/error.service';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-belediye-bilgi-update',
  templateUrl: './belediye-bilgi-update.component.html',
  styleUrls: ['./belediye-bilgi-update.component.css']
})
export class BelediyeBilgiUpdateComponent implements OnInit {
  currentBelediyeBilgi:BelediyeBilgi;
  belediyeBilgiUpdateForm:FormGroup
  constructor(private belediyeBilgiService:BelediyeBilgiService,private toastrService:ToastrService,private updateModal:MatDialogRef<BelediyeBilgiUpdateComponent>,private errorService:ErrorService,private formService:FormService) { }

  ngOnInit(): void {
    this.createBelediyeBilgiUpdateForm();
  }

  update() {
    if (this.belediyeBilgiUpdateForm.valid) {
      let newBelediyeBilgi = Object.assign({}, this.belediyeBilgiUpdateForm.value);
      newBelediyeBilgi.id = this.currentBelediyeBilgi.id;

      if (newBelediyeBilgi.belediyeAd == this.currentBelediyeBilgi.belediyeAd) {
        this.toastrService.error("Belediye adı eskisiyle aynı", "Güncelleme yapılmadı");
        return;
      }

      this.belediyeBilgiService.update(newBelediyeBilgi).subscribe(() => {
        this.toastrService.success(this.currentBelediyeBilgi.belediyeAd + ", " + newBelediyeBilgi.belediyeAd + " şeklinde güncellendi", "Güncelleme başarılı");
        this.closeUpdateModal();
      }, errorResponse => {
        this.errorService.showBackendError(errorResponse, "Belediye adı güncelleme başarısız");
      })

    } else {
      this.toastrService.error("Belediye adı 2-50 karakter arasında olmalıdır", "Form geçersiz");
      this.belediyeBilgiUpdateForm.reset();
    }
  }

  closeUpdateModal() {
    this.updateModal.close();
  }

  createBelediyeBilgiUpdateForm() {
    this.belediyeBilgiUpdateForm = this.formService.createBelediyeBilgiForm();
  }
}
