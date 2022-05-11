import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HayvanTurService } from 'src/app/services/hayvan-tur.service';

@Component({
  selector: 'app-hayvan-tur-add',
  templateUrl: './hayvan-tur-add.component.html',
  styleUrls: ['./hayvan-tur-add.component.css']
})
export class HayvanTurAddComponent implements OnInit {
  hayvanTurAddForm: FormGroup;
  constructor( private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private hayvanTurService: HayvanTurService,
    private router:Router) { }

  ngOnInit(): void {
    this.createHayvanTurAddForm();
  }
  createHayvanTurAddForm() {
    this.hayvanTurAddForm = this.formBuilder.group({
      hayvanTurAd: ['', Validators.required],
    });
  }
  add() {
    if (this.hayvanTurAddForm.valid) {
      let hayvanTurModel = Object.assign(
        {},
        this.hayvanTurAddForm.value
      );
      this.hayvanTurService.add(hayvanTurModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          this.router.navigateByUrl('/hayvanTurs/getall');
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
