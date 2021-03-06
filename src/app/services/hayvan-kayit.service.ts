import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HayvanKayit } from '../models/hayvanKayit';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class HayvanKayitService {

  apiUrl = 'https://localhost:5001/api/';
  
  constructor(private httpClient: HttpClient) {}
  
  getHayvanKayits(): Observable<ListResponseModel<HayvanKayit>> {
    let newPath = this.apiUrl + 'hayvankayits/getall';
    return this.httpClient.get<ListResponseModel<HayvanKayit>>(newPath);
  }
  
  add(hayvanKayit: HayvanKayit): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'hayvanKayits/add',hayvanKayit);
  }

  update(hayvanKayit: HayvanKayit):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+'hayvanKayits/update',hayvanKayit);
  }

  delete(hayvanKayit: HayvanKayit):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+'hayvanKayits/delete',hayvanKayit);
  }
}
