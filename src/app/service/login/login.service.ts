import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import { LoginUserDetail } from '../../model/LoginUserDetail';
import { HttpResponse } from 'selenium-webdriver/http';

@Injectable()
export class LoginService {
  url : string = '/login/';
  constructor(private _http: HttpClient) { }

  login(loginUserDetail:LoginUserDetail) {
    return this._http.post<any>(this.url, loginUserDetail)
      .map(user => {
        console.log(JSON.stringify(user));
        if (user && user.token) {
          //console.log(user.get)
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          sessionStorage.setItem('currentUser', JSON.stringify(user));
      }
        return user;
      });
  }

  
  logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUserInfo');

  }
}
