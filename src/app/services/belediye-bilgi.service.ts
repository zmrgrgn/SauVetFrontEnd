import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BelediyeBilgi } from '../models/belediyeBilgi';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BelediyeBilgiService {
  apiUrl="https://localhost:5001/api/"
  constructor(private httpClient:HttpClient) { }
  getBelediyeBilgis():Observable<ListResponseModel<BelediyeBilgi>>{
    let newPath=this.apiUrl+"belediyeBilgis/getall"
    return this.httpClient.get<ListResponseModel<BelediyeBilgi>>(newPath);
  }
  add(belediyeBilgi:BelediyeBilgi):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"belediyeBilgis/add",belediyeBilgi)
  }
}
