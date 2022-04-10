import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HayvanSahiplendirme } from '../models/hayvanSahiplendirme';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class HayvanSahiplendirmeService {
  apiUrl = 'https://localhost:5001/api/';
  constructor(private httpClient: HttpClient) {}
  getHayvanSahiplendirmes(): Observable<
    ListResponseModel<HayvanSahiplendirme>
  > {
    let newPath = this.apiUrl + 'hayvanSahiplendirmes/getall';
    return this.httpClient.get<ListResponseModel<HayvanSahiplendirme>>(newPath);
  }
  add(hayvanSahiplendirme: HayvanSahiplendirme): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'hayvanSahiplendirmes/add',
      hayvanSahiplendirme
    );
  }
}
