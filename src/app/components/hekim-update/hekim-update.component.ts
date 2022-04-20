import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Hekim } from 'src/app/models/hekim';
import { ErrorService } from 'src/app/services/error.service';
import { FormService } from 'src/app/services/form.service';
import { HekimService } from 'src/app/services/hekim.service';

@Component({
  selector: 'app-hekim-update',
  templateUrl: './hekim-update.component.html',
  styleUrls: ['./hekim-update.component.css']
})
export class HekimUpdateComponent implements OnInit {
  currentHekim:Hekim;
  hekimUpdateForm:FormGroup
  constructor(private service:HekimService,private toastrService:ToastrService,private updateModal:MatDialogRef<HekimUpdateComponent>,private errorService:ErrorService,private formService:FormService) { }

  ngOnInit(): void {
    this.createHekimUpdateForm();
  }
  update() {
    if (this.hekimUpdateForm.valid) {
      let newHekim = Object.assign({}, this.hekimUpdateForm.value);
      newHekim.id = this.currentHekim.id;


      this.service.update(newHekim).subscribe(() => {
        this.toastrService.success( "Güncelleme başarılı");
        this.closeUpdateModal();
      }, errorResponse => {
        this.errorService.showBackendError(errorResponse, "Güncelleme başarısız");
      })

    } else {
      this.toastrService.error("Form geçersiz");
      this.hekimUpdateForm.reset();
    }
  }

  closeUpdateModal() {
    this.updateModal.close();
  }

  createHekimUpdateForm() {
    this.hekimUpdateForm = this.formService.createHekimForm();
  }
}
