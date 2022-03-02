import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HayvanTedavi } from '../models/hayvanTedavi';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class HayvanTedaviService {
  apiUrl="https://localhost:5001/api/hayvantedavis/getall"
  constructor(private httpClient:HttpClient) { }
  getHayvanTedavis():Observable<ListResponseModel<HayvanTedavi>>{
    return this.httpClient.get<ListResponseModel<HayvanTedavi>>(this.apiUrl);
  }
}
