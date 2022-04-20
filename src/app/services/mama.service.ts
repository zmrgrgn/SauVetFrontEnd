import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Mama } from '../models/mama';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class MamaService {

  apiUrl = 'https://localhost:5001/api/';
  
  constructor(private httpClient: HttpClient) {}
  
  getMamas(): Observable<ListResponseModel<Mama>> {
    let newPath = this.apiUrl + 'mamas/getall';
    return this.httpClient.get<ListResponseModel<Mama>>(newPath);
  }
  
  add(mama: Mama): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'mamas/add', mama);
  }
  
  update(mama: Mama): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'mamas/update', mama);
  }
  
  delete(mama: Mama): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'mamas/delete', mama);
  }

}
