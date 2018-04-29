import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTripFormComponent } from './check-trip-form/check-trip-form.component';
import { CheckTripDetailsComponent } from "./check-trip-details/check-trip-details.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NotFoundPageComponent} from "./not-found-page/not-found-page.component";


const routes: Routes = [
  { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },

  { path: 'app/dashboard', component: DashboardComponent},
  { path: 'app/check-form', component: CheckTripFormComponent },
  { path: 'app/details/:bookingCode/:familyName', component: CheckTripDetailsComponent },
  { path: '**', redirectTo: '/404'},
  { path: '404', component: NotFoundPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
