import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private formBuilder:FormBuilder) { }

  createBelediyeBilgiForm():FormGroup{
    return this.formBuilder.group({
      belediyeAd: ["", Validators.required]
    })
  }
  createHayvanKayitForm():FormGroup{
    return this.formBuilder.group({
      kafesNo: ['', Validators.required],
      ad: ['', Validators.required],
      hayvanTur: ['', Validators.required],
      irk: ['', Validators.required],
      yas: ['', Validators.required],
      cinsiyet: ['', Validators.required],
      gebeMi: ['', Validators.required],
      anamnez: ['', Validators.required]
    })
  }
  createHayvanSahiplendirmeForm():FormGroup{
    return this.formBuilder.group({
      hayvanId: ['', Validators.required],
      vatandasId: ['', Validators.required],
      belediyeId: ['', Validators.required],
      tarih: ['', Validators.required]
    })
  }
  createHayvanTedaviForm():FormGroup{
    return this.formBuilder.group({
      hayvanId: ['', Validators.required],
      hekimId: ['', Validators.required],
      tedaviBaslik: ['', Validators.required],
      tedaviDetay: ['', Validators.required],
      tedaviTarih: ['', Validators.required],
      bulgular: ['', Validators.required],
      notlar: ['', Validators.required],
      olduMu: ['', Validators.required],
      olumNedeni: ['', Validators.required]
    })
  }
  createHekimForm():FormGroup{
    return this.formBuilder.group({
      ad: ['', Validators.required],
      soyad: ['', Validators.required],
      telNo: ['', Validators.required],
      gorev: ['', Validators.required],
      tcNo: ['', Validators.required],
      sicilNo: ['', Validators.required]
    })
  }
  createMamaForm():FormGroup{
    return this.formBuilder.group({
      tarih: ['', Validators.required],
      ad: ['', Validators.required],
      malzemeTur: ['', Validators.required],
      miktar: ['', Validators.required],
      birim: ['', Validators.required]
    })
  }
  createVatandasBilgiForm():FormGroup{
    return this.formBuilder.group({
      ad: ['', Validators.required],
      soyad: ['', Validators.required],
      telNo: ['', Validators.required],
      tcNo: ['', Validators.required]
    })
  }
}
