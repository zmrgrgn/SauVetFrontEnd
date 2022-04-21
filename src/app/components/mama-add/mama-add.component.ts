import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MamaService } from 'src/app/services/mama.service';

@Component({
  selector: 'app-mama-add',
  templateUrl: './mama-add.component.html',
  styleUrls: ['./mama-add.component.css'],
})
export class MamaAddComponent implements OnInit {
  mamaAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private mamaService: MamaService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.createMamaAddForm();
  }
  createMamaAddForm() {
    this.mamaAddForm = this.formBuilder.group({
      tarih: ['', Validators.required],
      ad: ['', Validators.required],
      malzemeTur: ['', Validators.required],
      miktar: ['', Validators.required],
      birim: ['', Validators.required],
    });
  }
  add() {
    if (this.mamaAddForm.valid) {
      let mamaModel = Object.assign({}, this.mamaAddForm.value);
      this.mamaService.add(mamaModel).subscribe(
        (response) => {
          this.router.navigateByUrl('/mamas/getall');
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
