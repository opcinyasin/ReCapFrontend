import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {LoginModel} from '../models/loginModel';
import {HttpClient} from '@angular/common/http';
import {TokenModel} from '../models/tokenModel';
import {Observable} from 'rxjs';
import {SingleResponseModel} from '../models/singleResponseModel';
import {RegisterModel} from '../models/registerModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.apiUrl + '/auth';
  constructor(private httpClient: HttpClient) { }

  login(loginModel:LoginModel):Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + '/login',loginModel);
  }
  register(registerModel:RegisterModel):Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + '/register',registerModel);
  }

  isAuthenticated():boolean{
    if (localStorage.getItem("token")){
      return true;
    }
    else return false;
  }

}
