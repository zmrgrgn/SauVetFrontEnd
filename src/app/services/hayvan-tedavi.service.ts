import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HayvanTedavi } from '../models/hayvanTedavi';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class HayvanTedaviService {
  apiUrl="https://localhost:5001/api/"
  constructor(private httpClient:HttpClient) { }
  getHayvanTedavis():Observable<ListResponseModel<HayvanTedavi>>{
    let newPath=this.apiUrl+"hayvanTedavis/getall"
    return this.httpClient.get<ListResponseModel<HayvanTedavi>>(this.apiUrl);
  }
  add(hayvanTedavi:HayvanTedavi):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"hayvanTedavis/add",hayvanTedavi)
  }
}
