import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HayvanKayitResponseModel } from '../models/hayvanKayitResponseModel';

@Injectable({
  providedIn: 'root'
})
export class HayvanKayitService {
  apiUrl="https://localhost:5001/api/hayvankayits/getall"
  constructor(private httpClient:HttpClient) { }
  getHayvanKayits():Observable<HayvanKayitResponseModel>{
    return this.httpClient.get<HayvanKayitResponseModel>(this.apiUrl);
  }
}
