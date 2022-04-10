import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HayvanKayitService } from 'src/app/services/hayvan-kayit.service';

@Component({
  selector: 'app-hayvan-kayit-add',
  templateUrl: './hayvan-kayit-add.component.html',
  styleUrls: ['./hayvan-kayit-add.component.css'],
})
export class HayvanKayitAddComponent implements OnInit {
  hayvanKayitAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private hayvanKayitService: HayvanKayitService
  ) {}

  ngOnInit(): void {
    this.createHayvanKayitAddForm();
  }
  createHayvanKayitAddForm() {
    this.hayvanKayitAddForm = this.formBuilder.group({
      id: ['', Validators.required],
      vatandasId: ['', Validators.required],
      belediyeId: ['', Validators.required],
      kafesNo: ['', Validators.required],
      cipNo: ['', Validators.required],
      kulakNo: ['', Validators.required],
      ad: ['', Validators.required],
      hayvanTur: ['', Validators.required],
      irk: ['', Validators.required],
      yas: ['', Validators.required],
      cinsiyet: ['', Validators.required],
      esgal: ['', Validators.required],
      gebeMi: ['', Validators.required],
      geldigiTarih: ['', Validators.required],
      geldigiAdres: ['', Validators.required],
      anamnez: ['', Validators.required],
      fotograf: ['', Validators.required],
    });
  }
  add() {
    if (this.hayvanKayitAddForm.valid) {
      let hayvanKayitModel = Object.assign({}, this.hayvanKayitAddForm.value);
      this.hayvanKayitService.add(hayvanKayitModel).subscribe(
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
