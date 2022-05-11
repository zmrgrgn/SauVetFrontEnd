import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HayvanTur } from '../models/hayvanTur';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class HayvanTurService {
  apiUrl = 'https://localhost:5001/api/';
  
  constructor(private httpClient: HttpClient) {}
  
  getHayvanTurs(): Observable<ListResponseModel<HayvanTur>> {
    let newPath = this.apiUrl + 'hayvanTurs/getall';
    return this.httpClient.get<ListResponseModel<HayvanTur>>(newPath);
  }
  
  add(hayvanTur: HayvanTur): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'hayvanTurs/add',hayvanTur);
  }
  
  update(hayvanTur: HayvanTur): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'hayvanTurs/update',hayvanTur);
  }
  
  delete(hayvanTur: HayvanTur): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'hayvanTurs/delete',hayvanTur);
  }
}
