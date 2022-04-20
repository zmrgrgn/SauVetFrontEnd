import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hekim } from '../models/hekim';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class HekimService {
  
  apiUrl = 'https://localhost:5001/api/';
  
  constructor(private httpClient: HttpClient) {}
  
  getHekims(): Observable<ListResponseModel<Hekim>> {
    let newPath = this.apiUrl + 'hekims/getall';
    return this.httpClient.get<ListResponseModel<Hekim>>(newPath);
  }
  
  add(hekim: Hekim): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'hekims/add',hekim);
  }

  update(hekim: Hekim): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'hekims/update',hekim);
  }
  
  delete(hekim: Hekim): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'hekims/delete',hekim);
  }
}
