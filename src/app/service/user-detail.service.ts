import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserDetailService {
  url : string = '/api/user/info';
  constructor(private _http: HttpClient) { }

  getUserDetails() {
    return this._http.post<any>(this.url, {})
      .map(userInfo => {
        sessionStorage.setItem('currentUserInfo', JSON.stringify(userInfo));
        console.log(JSON.stringify(userInfo));
        return userInfo;
      });
  }
}
