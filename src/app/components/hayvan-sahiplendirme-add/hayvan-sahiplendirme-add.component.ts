import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BelediyeBilgi } from 'src/app/models/belediyeBilgi';
import { HayvanKayit } from 'src/app/models/hayvanKayit';
import { VatandasBilgi } from 'src/app/models/vatandasBilgi';
import { BelediyeBilgiService } from 'src/app/services/belediye-bilgi.service';
import { HayvanKayitService } from 'src/app/services/hayvan-kayit.service';
import { HayvanSahiplendirmeService } from 'src/app/services/hayvan-sahiplendirme.service';
import { VatandasBilgiService } from 'src/app/services/vatandas-bilgi.service';

@Component({
  selector: 'app-hayvan-sahiplendirme-add',
  templateUrl: './hayvan-sahiplendirme-add.component.html',
  styleUrls: ['./hayvan-sahiplendirme-add.component.css'],
})
export class HayvanSahiplendirmeAddComponent implements OnInit {
  hayvanSahiplendirmeAddForm: FormGroup;
  vatandasBilgiFilter:number=0
  vatandasBilgis:VatandasBilgi[]=[];
  hayvanKayitFilter:string="0"
  hayvanKayits:HayvanKayit[]=[];
  belediyeBilgiFilter:number=0
  belediyeBilgis:BelediyeBilgi[]=[];
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private hayvanSahiplendirmeService: HayvanSahiplendirmeService,
    private vatandasBilgiService:VatandasBilgiService,
    private hayvanKayitService:HayvanKayitService,
    private belediyeBilgiService:BelediyeBilgiService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.createHayvanSahiplendirmeAddForm();
    this.getAllVatandasBilgi();
    this.getAllHayvanKayit();
    this.getAllBelediyeBilgi();
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
          this.router.navigateByUrl('/hayvanSahiplendirmes/getall');
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
  getSelectedHayvanKayit(id: string){
    if(this.hayvanKayitFilter==id) return true;
    else return false; 
  }
  getAllHayvanKayit() {
    this.hayvanKayitService.getHayvanKayits().subscribe((response) => {
      this.hayvanKayits = response.data;
      console.log(this.hayvanKayits);
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
