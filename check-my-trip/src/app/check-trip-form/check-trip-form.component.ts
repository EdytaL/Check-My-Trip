import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from "@angular/forms";
import { CheckTripFormService } from "./check-trip-form.service";

@Component({
  selector: 'app-check-trip-form',
  templateUrl: './check-trip-form.component.html',
  styleUrls: ['./check-trip-form.component.css']
})
export class CheckTripFormComponent implements OnInit {

  checkInForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private service: CheckTripFormService
  ) { }

  ngOnInit() {
    this.checkInForm = this.fb.group({
      bookingCode: ['', Validators.required ],
      familyName: ['', Validators.required]
    })
  }
  private onSubmit() {
    this.service.getTripDetails(this.checkInForm.getRawValue())
      .subscribe(
        data => {
          console.log(data);
        }
      )
  }

}
