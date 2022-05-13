import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChangePasswordModel } from '../models/changePasswordModel';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { UserForLogin } from '../models/userForLogin';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  apiUrl = 'https://localhost:5001/api/auth/';

  private loggedIn = new BehaviorSubject<boolean>(this.isTokenExpired());
  public get loginStatus() {
    return this.loggedIn.asObservable();
  }

  public get isLoggedIn() {
    return this.loggedIn.getValue();
  }

  public set isLoggedIn(status: boolean) {
    this.loggedIn.next(status);
  }
  constructor(private httpClient: HttpClient,private localStorageService: LocalStorageService,
    private jwtHelperService: JwtHelperService) {}

    private isTokenExpired(): boolean {
      let token = this.getToken();
      if (token != null) {
        return !this.jwtHelperService.isTokenExpired(token);
      }
      return false;
    }
  
    private getToken(): string | null {
      return this.localStorageService.getItem("token");
    }
  login(loginModel: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiUrl + 'login',
      loginModel
    );
  }
  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
  logOut() {
    this.localStorageService.remove("token");
    this.loggedIn.next(false);
  }
  register(newUser: RegisterModel): Observable<SingleResponseModel<TokenModel>> {
    let newPath = this.apiUrl + 'register'
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath, newUser);
  }
  getUser(): UserForLogin | undefined {
    let token = this.getToken();
    if (token != null) {
      let tokenDetails = Object.entries(this.jwtHelperService.decodeToken(token));
      let user: UserForLogin = new UserForLogin;
      tokenDetails.forEach(detail => {
        switch (detail[0]) {
          case "email": {
            user.email = String(detail[1]);
            break;
          }
          case "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": {
            user.name = String(detail[1]);
            break;
          }
          case "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": {
            user.roles = detail[1] as Array<string>
            break;
          }
          case "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": {
            user.id = Number(detail[1]);
          }
        }
      });
      if (!user.roles) {  //if the user does not have a role
        user.roles = [];
      }
      return user;
    }
    return undefined;
  }

  hasRole(user: UserForLogin, role: string): boolean {
    if (user.roles.indexOf(role) !== -1) {
      return true;
    }
    return false;
  }

  
}
