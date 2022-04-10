import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { VatandasBilgiService } from 'src/app/services/vatandas-bilgi.service';

@Component({
  selector: 'app-vatandas-bilgi-add',
  templateUrl: './vatandas-bilgi-add.component.html',
  styleUrls: ['./vatandas-bilgi-add.component.css'],
})
export class VatandasBilgiAddComponent implements OnInit {
  vatandasBilgiAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private vatandasBilgiService: VatandasBilgiService
  ) {}

  ngOnInit(): void {
    this.createVatandasBilgiAddForm();
  }
  createVatandasBilgiAddForm() {
    this.vatandasBilgiAddForm = this.formBuilder.group({
      ad: ['', Validators.required],
      soyad: ['', Validators.required],
      telNo: ['', Validators.required],
      tcNo: ['', Validators.required],
    });
  }
  add() {
    if (this.vatandasBilgiAddForm.valid) {
      let vatandasBilgiModel = Object.assign(
        {},
        this.vatandasBilgiAddForm.value
      );
      this.vatandasBilgiService.add(vatandasBilgiModel).subscribe(
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
