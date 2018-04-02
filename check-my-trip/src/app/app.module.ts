import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CheckTripFormComponent } from './check-trip-form/check-trip-form.component';
import { CheckTripDetailsComponent } from './check-trip-details/check-trip-details.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HeaderComponent } from './shared/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckTripFormComponent,
    CheckTripDetailsComponent,
    DashboardComponent,
    NotFoundPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
