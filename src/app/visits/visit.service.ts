import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable'

@Injectable()
export class VisitService {
  visitUrl : string = '/visit/get';
  constructor(private _http: HttpClient) { }
  
  visits() {
    return this._http.get<any>(this.visitUrl+'?patientId:'+sessionStorage.currentUser.patientId, {})
      .map(data => {
        console.log(JSON.stringify(data));
        return data;
      });
  }
}
