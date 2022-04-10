import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HayvanSahiplendirmeService } from 'src/app/services/hayvan-sahiplendirme.service';

@Component({
  selector: 'app-hayvan-sahiplendirme-add',
  templateUrl: './hayvan-sahiplendirme-add.component.html',
  styleUrls: ['./hayvan-sahiplendirme-add.component.css'],
})
export class HayvanSahiplendirmeAddComponent implements OnInit {
  hayvanSahiplendirmeAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private hayvanSahiplendirmeService: HayvanSahiplendirmeService
  ) {}

  ngOnInit(): void {
    this.createHayvanSahiplendirmeAddForm();
  }
  createHayvanSahiplendirmeAddForm() {
    this.hayvanSahiplendirmeAddForm = this.formBuilder.group({
      hayvanId: ['', Validators.required],
      vatandasId: ['', Validators.required],
      belediyeId: ['', Validators.required],
      tarih: ['', Validators.required],
    });
  }
  add() {
    if (this.hayvanSahiplendirmeAddForm.valid) {
      let hayvanSahiplendirmeModel = Object.assign(
        {},
        this.hayvanSahiplendirmeAddForm.value
      );
      this.hayvanSahiplendirmeService.add(hayvanSahiplendirmeModel).subscribe(
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
