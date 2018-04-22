import { Component, OnInit } from '@angular/core';
import { CheckTripDetailsService } from "./check-trip-details.service";
import { Subscription } from "rxjs/Subscription";
import { Route, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-check-trip-details',
  templateUrl: './check-trip-details.component.html',
  styleUrls: ['./check-trip-details.component.css']
})
export class CheckTripDetailsComponent implements OnInit {

  private sub: Subscription;

  constructor(
    private service: CheckTripDetailsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let bookingCode = params.bookingCode;
      let familyName = params.familyName.toUpperCase();
      this.service.getTripDetails(bookingCode, familyName)
        .subscribe(
          data => {
            console.log(data);
          }
        )
    })
  }

}
