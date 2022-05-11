import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KafesNo } from '../models/kafesNo';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class KafesNoService {
  apiUrl = 'https://localhost:5001/api/';
  
  constructor(private httpClient: HttpClient) {}
  
  getKafesNos(): Observable<ListResponseModel<KafesNo>> {
    let newPath = this.apiUrl + 'kafesNos/getall';
    return this.httpClient.get<ListResponseModel<KafesNo>>(newPath);
  }
  
  add(kafesNo: KafesNo): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'kafesNos/add',kafesNo);
  }
  
  update(kafesNo: KafesNo): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'kafesNos/update',kafesNo);
  }
  
  delete(kafesNo: KafesNo): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'kafesNos/delete',kafesNo);
  }
}
