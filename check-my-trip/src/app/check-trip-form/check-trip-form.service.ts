import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CheckTripFormService {

  constructor(
    private http: HttpClient
  ) { }

  getTripDetails(details: any): Observable<any> {
    let url = '';
    return this.http.post(url, details);
  }
}
