import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BelediyeBilgi } from 'src/app/models/belediyeBilgi';
import { VatandasBilgi } from 'src/app/models/vatandasBilgi';
import { BelediyeBilgiService } from 'src/app/services/belediye-bilgi.service';
import { HayvanKayitService } from 'src/app/services/hayvan-kayit.service';
import { VatandasBilgiService } from 'src/app/services/vatandas-bilgi.service';

@Component({
  selector: 'app-hayvan-kayit-add',
  templateUrl: './hayvan-kayit-add.component.html',
  styleUrls: ['./hayvan-kayit-add.component.css'],
})
export class HayvanKayitAddComponent implements OnInit {
  hayvanKayitAddForm: FormGroup;
  vatandasBilgiFilter:number=0
  vatandasBilgis:VatandasBilgi[]=[];
  belediyeBilgiFilter:number=0
  belediyeBilgis:BelediyeBilgi[]=[];
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private hayvanKayitService: HayvanKayitService,
    private vatandasBilgiService:VatandasBilgiService,
    private belediyeBilgiService:BelediyeBilgiService
  ) {}

  ngOnInit(): void {
    this.createHayvanKayitAddForm();
    this.getAllVatandasBilgi();
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
  getSelectedVatandasBilgi(id: number){
    if(this.vatandasBilgiFilter==id) return true;
    else return false; 
  }
  getAllVatandasBilgi() {
    this.vatandasBilgiService.getVatandasBilgis().subscribe((response) => {
      this.vatandasBilgis = response.data;
      console.log(this.vatandasBilgis);
    });
  }
  getSelectedBelediyeBilgi(id: number){
    if(this.belediyeBilgiFilter==id) return true;
    else return false; 
  }
  getAllBelediyeBilgi() {
    this.belediyeBilgiService.getBelediyeBilgis().subscribe((response) => {
      this.belediyeBilgis = response.data;
      console.log(this.belediyeBilgis);
    });
  }
}
