import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HekimService } from 'src/app/services/hekim.service';

@Component({
  selector: 'app-hekim-add',
  templateUrl: './hekim-add.component.html',
  styleUrls: ['./hekim-add.component.css'],
})
export class HekimAddComponent implements OnInit {
  hekimAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private hekimService: HekimService
  ) {}

  ngOnInit(): void {
    this.createHekimAddForm();
  }
  createHekimAddForm() {
    this.hekimAddForm = this.formBuilder.group({
      ad: ['', Validators.required],
      soyad: ['', Validators.required],
      telNo: ['', Validators.required],
      gorev: ['', Validators.required],
      tcNo: ['', Validators.required],
      sicilNo: ['', Validators.required],
    });
  }
  add() {
    if (this.hekimAddForm.valid) {
      let hekimModel = Object.assign({}, this.hekimAddForm.value);
      this.hekimService.add(hekimModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
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
