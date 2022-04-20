import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { VatandasBilgi } from '../models/vatandasBilgi';

@Injectable({
  providedIn: 'root',
})
export class VatandasBilgiService {

  apiUrl = 'https://localhost:5001/api/';
  
  constructor(private httpClient: HttpClient) {}
  
  getVatandasBilgis(): Observable<ListResponseModel<VatandasBilgi>> {
    let newPath = this.apiUrl + 'vatandasBilgis/getall';
    return this.httpClient.get<ListResponseModel<VatandasBilgi>>(newPath);
  }
  
  add(vatandasBilgi: VatandasBilgi): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'vatandasBilgis/add',vatandasBilgi);
  }

  update(vatandasBilgi: VatandasBilgi): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'vatandasBilgis/update',vatandasBilgi);
  }

  delete(vatandasBilgi: VatandasBilgi): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'vatandasBilgis/delete',vatandasBilgi);
  }
}
