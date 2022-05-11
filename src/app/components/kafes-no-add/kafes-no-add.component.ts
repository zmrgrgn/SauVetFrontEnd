import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { KafesNoService } from 'src/app/services/kafes-no.service';

@Component({
  selector: 'app-kafes-no-add',
  templateUrl: './kafes-no-add.component.html',
  styleUrls: ['./kafes-no-add.component.css']
})
export class KafesNoAddComponent implements OnInit {
  kafesNoAddForm: FormGroup;
  constructor( private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private kafesNoService: KafesNoService,
    private router:Router) { }

  ngOnInit(): void {
    this.createKafesNoAddForm();
  }
  createKafesNoAddForm() {
    this.kafesNoAddForm = this.formBuilder.group({
      kafesAdi: ['', Validators.required],
    });
  }
  add() {
    if (this.kafesNoAddForm.valid) {
      let kafesNoModel = Object.assign(
        {},
        this.kafesNoAddForm.value
      );
      this.kafesNoService.add(kafesNoModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          this.router.navigateByUrl('/kafesNos/getall');
        },
        (responseError) => {
          if (responseError.error.Errors.lenght > 0) {
            for (let i = 0; i < responseError.error.Errors.lenght; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Doğrulama hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }

}
