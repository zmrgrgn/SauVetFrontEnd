import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BelediyeBilgiService } from 'src/app/services/belediye-bilgi.service';

@Component({
  selector: 'app-belediye-bilgi-add',
  templateUrl: './belediye-bilgi-add.component.html',
  styleUrls: ['./belediye-bilgi-add.component.css'],
})
export class BelediyeBilgiAddComponent implements OnInit {
  belediyeBilgiAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private belediyeBilgiService: BelediyeBilgiService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.createBelediyeBilgiAddForm();
  }
  createBelediyeBilgiAddForm() {
    this.belediyeBilgiAddForm = this.formBuilder.group({
      belediyeAd: ['', Validators.required],
    });
  }
  add() {
    if (this.belediyeBilgiAddForm.valid) {
      let belediyeBilgiModel = Object.assign(
        {},
        this.belediyeBilgiAddForm.value
      );
      this.belediyeBilgiService.add(belediyeBilgiModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          this.router.navigateByUrl('/belediyeBilgis/getall');
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
