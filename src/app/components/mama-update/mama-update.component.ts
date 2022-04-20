import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Mama } from 'src/app/models/mama';
import { ErrorService } from 'src/app/services/error.service';
import { FormService } from 'src/app/services/form.service';
import { MamaService } from 'src/app/services/mama.service';

@Component({
  selector: 'app-mama-update',
  templateUrl: './mama-update.component.html',
  styleUrls: ['./mama-update.component.css']
})
export class MamaUpdateComponent implements OnInit {
  currentMama:Mama;
  mamaUpdateForm:FormGroup
  constructor(private service:MamaService,private toastrService:ToastrService,private updateModal:MatDialogRef<MamaUpdateComponent>,private errorService:ErrorService,private formService:FormService) { }

  ngOnInit(): void {
    this.createMamaUpdateForm();
  }
  update() {
    if (this.mamaUpdateForm.valid) {
      let newMama = Object.assign({}, this.mamaUpdateForm.value);
      newMama.id = this.currentMama.id;


      this.service.update(newMama).subscribe(() => {
        this.toastrService.success( "Güncelleme başarılı");
        this.closeUpdateModal();
      }, errorResponse => {
        this.errorService.showBackendError(errorResponse, "Güncelleme başarısız");
      })

    } else {
      this.toastrService.error("Form geçersiz");
      this.mamaUpdateForm.reset();
    }
  }

  closeUpdateModal() {
    this.updateModal.close();
  }

  createMamaUpdateForm() {
    this.mamaUpdateForm = this.formService.createMamaForm();
  }
}
