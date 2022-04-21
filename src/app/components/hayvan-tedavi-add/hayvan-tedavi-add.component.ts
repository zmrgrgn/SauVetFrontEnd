import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HayvanKayit } from 'src/app/models/hayvanKayit';
import { Hekim } from 'src/app/models/hekim';
import { HayvanKayitService } from 'src/app/services/hayvan-kayit.service';
import { HayvanTedaviService } from 'src/app/services/hayvan-tedavi.service';
import { HekimService } from 'src/app/services/hekim.service';

@Component({
  selector: 'app-hayvan-tedavi-add',
  templateUrl: './hayvan-tedavi-add.component.html',
  styleUrls: ['./hayvan-tedavi-add.component.css'],
})
export class HayvanTedaviAddComponent implements OnInit {
  hayvanTedaviAddForm: FormGroup;
  hekimFilter:number=0
  hekims:Hekim[]=[];
  hayvanKayitFilter:string="0"
  hayvanKayits:HayvanKayit[]=[];
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private hayvanTedaviService: HayvanTedaviService,
    private hekimService:HekimService,
    private hayvanKayitService:HayvanKayitService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.createHayvanTedaviAddForm();
    this.getAllHekim();
    this.getAllHayvanKayit();
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
          this.router.navigateByUrl('/hayvanTedavis/getall');
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

  getSelectedHekim(id: number){
    if(this.hekimFilter==id) return true;
    else return false; 
  }
  getAllHekim() {
    this.hekimService.getHekims().subscribe((response) => {
      this.hekims = response.data;
      console.log(this.hekims);
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
}
