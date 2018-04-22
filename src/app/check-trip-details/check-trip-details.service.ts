import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { ConfigService } from "../shared/services/config.service";

@Injectable()
export class CheckTripDetailsService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) {
  }

  getTripDetails(bookingCode: string, familyName: string): Observable<any> {
    let url = this.configService.get('serverUrl') +  '/api/trip/details/' + bookingCode + '/' + familyName;
    return this.http.get(url);
  };
}

