import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CheckTripDetailsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getTripDetails(bookingCode: string, familyName: string): Observable<any> {
    let url = 'http://localhost:4000/api/trip/details/' + bookingCode + '/' + familyName;
    return this.http.get(url);
  };
}

