import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HayvanTedavi } from 'src/app/models/hayvanTedavi';
import { ErrorService } from 'src/app/services/error.service';
import { FormService } from 'src/app/services/form.service';
import { HayvanTedaviService } from 'src/app/services/hayvan-tedavi.service';

@Component({
  selector: 'app-hayvan-tedavi-update',
  templateUrl: './hayvan-tedavi-update.component.html',
  styleUrls: ['./hayvan-tedavi-update.component.css']
})
export class HayvanTedaviUpdateComponent implements OnInit {
  currentHayvanTedavi:HayvanTedavi;
  hayvanTedaviUpdateForm:FormGroup
  constructor(private hayvanTedaviService:HayvanTedaviService,private toastrService:ToastrService,private updateModal:MatDialogRef<HayvanTedaviUpdateComponent>,private errorService:ErrorService,private formService:FormService) { }


  ngOnInit(): void {
    this.createHayvanTedaviUpdateForm();
  }
  update() {
    if (this.hayvanTedaviUpdateForm.valid) {
      let newHayvanTedavi = Object.assign({}, this.hayvanTedaviUpdateForm.value);
      newHayvanTedavi.id = this.currentHayvanTedavi.id;


      this.hayvanTedaviService.update(newHayvanTedavi).subscribe(() => {
        this.toastrService.success( "Güncelleme başarılı");
        this.closeUpdateModal();
      }, errorResponse => {
        this.errorService.showBackendError(errorResponse, "Güncelleme başarısız");
      })

    } else {
      this.toastrService.error("Form geçersiz");
      this.hayvanTedaviUpdateForm.reset();
    }
  }

  closeUpdateModal() {
    this.updateModal.close();
  }

  createHayvanTedaviUpdateForm() {
    this.hayvanTedaviUpdateForm = this.formService.createHayvanTedaviForm();
  }
}
