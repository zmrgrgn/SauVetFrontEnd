import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HayvanKayit } from '../models/hayvanKayit';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class HayvanKayitService {
  apiUrl="https://localhost:5001/api/"
  constructor(private httpClient:HttpClient) { }
  getHayvanKayits():Observable<ListResponseModel<HayvanKayit>>{
    let newPath=this.apiUrl+"hayvankayits/getall"
    return this.httpClient.get<ListResponseModel<HayvanKayit>>(newPath);
  }
 getHayvanKayitsByHayvanTedavi(hayvanKayitId:number):Observable<ListResponseModel<HayvanKayit>>{
let newPath=this.apiUrl+"hayvankayits/getbyid?hayvanKayitId="+hayvanKayitId
   return this.httpClient.get<ListResponseModel<HayvanKayit>>(newPath);
  }
}
