import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HayvanKayit } from 'src/app/models/hayvanKayit';
import { ErrorService } from 'src/app/services/error.service';
import { FormService } from 'src/app/services/form.service';
import { HayvanKayitService } from 'src/app/services/hayvan-kayit.service';

@Component({
  selector: 'app-hayvan-kayit-update',
  templateUrl: './hayvan-kayit-update.component.html',
  styleUrls: ['./hayvan-kayit-update.component.css']
})
export class HayvanKayitUpdateComponent implements OnInit {
  currentHayvanKayit:HayvanKayit;
  hayvanKayitUpdateForm:FormGroup
  constructor(private hayvanKayitService:HayvanKayitService,private toastrService:ToastrService,private updateModal:MatDialogRef<HayvanKayitUpdateComponent>,private errorService:ErrorService,private formService:FormService) { }

  ngOnInit(): void {
    this.createHayvanKayitUpdateForm();
  }
  update() {
    if (this.hayvanKayitUpdateForm.valid) {
      let newHayvanKayit = Object.assign({}, this.hayvanKayitUpdateForm.value);
      newHayvanKayit.id = this.currentHayvanKayit.id;


      this.hayvanKayitService.update(newHayvanKayit).subscribe(() => {
        this.toastrService.success( "Güncelleme başarılı");
        this.closeUpdateModal();
      }, errorResponse => {
        this.errorService.showBackendError(errorResponse, "Güncelleme başarısız");
      })

    } else {
      this.toastrService.error("Form geçersiz");
      this.hayvanKayitUpdateForm.reset();
    }
  }

  closeUpdateModal() {
    this.updateModal.close();
  }

  createHayvanKayitUpdateForm() {
    this.hayvanKayitUpdateForm = this.formService.createHayvanKayitForm();
  }
}
