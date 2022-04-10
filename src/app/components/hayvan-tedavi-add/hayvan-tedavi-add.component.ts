import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HayvanTedaviService } from 'src/app/services/hayvan-tedavi.service';

@Component({
  selector: 'app-hayvan-tedavi-add',
  templateUrl: './hayvan-tedavi-add.component.html',
  styleUrls: ['./hayvan-tedavi-add.component.css'],
})
export class HayvanTedaviAddComponent implements OnInit {
  hayvanTedaviAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private hayvanTedaviService: HayvanTedaviService
  ) {}

  ngOnInit(): void {
    this.createHayvanTedaviAddForm();
  }
  createHayvanTedaviAddForm() {
    this.hayvanTedaviAddForm = this.formBuilder.group({
      hayvanId: ['', Validators.required],
      hekimId: ['', Validators.required],
      tedaviBaslik: ['', Validators.required],
      tedaviDetay: ['', Validators.required],
      tedaviTarih: ['', Validators.required],
      bulgular: ['', Validators.required],
      notlar: ['', Validators.required],
      olduMu: ['', Validators.required],
      olumNedeni: ['', Validators.required],
    });
  }
  add() {
    if (this.hayvanTedaviAddForm.valid) {
      let hayvanTedaviModel = Object.assign({}, this.hayvanTedaviAddForm.value);
      this.hayvanTedaviService.add(hayvanTedaviModel).subscribe(
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
