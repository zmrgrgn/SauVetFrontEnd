import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HayvanSahiplendirme } from 'src/app/models/hayvanSahiplendirme';
import { ErrorService } from 'src/app/services/error.service';
import { FormService } from 'src/app/services/form.service';
import { HayvanSahiplendirmeService } from 'src/app/services/hayvan-sahiplendirme.service';

@Component({
  selector: 'app-hayvan-sahiplendirme-update',
  templateUrl: './hayvan-sahiplendirme-update.component.html',
  styleUrls: ['./hayvan-sahiplendirme-update.component.css']
})
export class HayvanSahiplendirmeUpdateComponent implements OnInit {
  currentHayvanSahiplendirme:HayvanSahiplendirme;
  hayvanSahiplendirmeUpdateForm:FormGroup
  constructor(private service:HayvanSahiplendirmeService,private toastrService:ToastrService,private updateModal:MatDialogRef<HayvanSahiplendirmeUpdateComponent>,private errorService:ErrorService,private formService:FormService) { }

  ngOnInit(): void { 
    this.createHayvanSahiplendirmeUpdateForm();
  }
  update() {
    if (this.hayvanSahiplendirmeUpdateForm.valid) {
      let newHayvanSahiplendirme = Object.assign({}, this.hayvanSahiplendirmeUpdateForm.value);
      newHayvanSahiplendirme.id = this.currentHayvanSahiplendirme.id;


      this.service.update(newHayvanSahiplendirme).subscribe(() => {
        this.toastrService.success( "Güncelleme başarılı");
        this.closeUpdateModal();
      }, errorResponse => {
        this.errorService.showBackendError(errorResponse, "Güncelleme başarısız");
      })

    } else {
      this.toastrService.error("Form geçersiz");
      this.hayvanSahiplendirmeUpdateForm.reset();
    }
  }

  closeUpdateModal() {
    this.updateModal.close();
  }

  createHayvanSahiplendirmeUpdateForm() {
    this.hayvanSahiplendirmeUpdateForm = this.formService.createHayvanSahiplendirmeForm();
  }
}
