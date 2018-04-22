import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FormBuilder, FormGroup, Validator, Validators } from "@angular/forms";
import { CheckTripFormService } from "./check-trip-form.service";

@Component({
  selector: 'app-check-trip-form',
  templateUrl: './check-trip-form.component.html',
  styleUrls: ['./check-trip-form.component.css']
})
export class CheckTripFormComponent implements OnInit {

  private invalidBookignCodeMessage: string;
  private invalidFamilyNameMessage: string;

  checkInForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: CheckTripFormService,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkInForm = this.fb.group({
      bookingCode: ['', Validators.required ],
      familyName: ['', Validators.required]
    })

    this.checkInForm.controls.bookingCode.valueChanges
      .subscribe(
        change => {
          let controlErrors = this.checkInForm.controls.bookingCode.errors;
          if(controlErrors) {
            if(controlErrors.pattern) {
              this.invalidBookignCodeMessage = 'Booking code can contain only letters and digits in the range 2 and 9';
            } else if (controlErrors.minlength) {
              this.invalidBookignCodeMessage = 'Min length 5 characters';
            }
          }
        }
      );
    this.checkInForm.controls.familyName.valueChanges
      .subscribe(
        change => {
          let controlErrors = this.checkInForm.controls.familyName.errors;
          if(controlErrors) {
            if (controlErrors.minlength) {
              this.invalidFamilyNameMessage = 'Min length 2 characters';
            } else if (controlErrors.pattern) {
              this.invalidFamilyNameMessage = 'Family name can contain only letters'
            }
          }
        }
      );
  }
  onSubmit() {
    let bookingCode = this.checkInForm.controls.bookingCode.value;
    let familyName = this.checkInForm.controls.familyName.value.toUpperCase();
    this.router.navigate(['/details/' + bookingCode + '/' + familyName]);
  }

}
