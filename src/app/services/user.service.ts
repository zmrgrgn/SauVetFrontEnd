import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://localhost:5001/api/';
  constructor(private httpClient: HttpClient) { }
  updateProfile(user: User): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'users/update'
    return this.httpClient.post<ResponseModel>(newPath, user);
  }
}
