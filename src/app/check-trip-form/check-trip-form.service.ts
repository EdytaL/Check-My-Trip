import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CheckTripFormService {

  constructor(
    private http: HttpClient
  ) { }
}
