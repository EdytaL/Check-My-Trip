import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTripFormComponent } from './check-trip-form/check-trip-form.component';
import { CheckTripDetailsComponent } from "./check-trip-details/check-trip-details.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NotFoundPageComponent} from "./not-found-page/not-found-page.component";


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/404', pathMatch: 'full'},

  { path: '404', component: NotFoundPageComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'check-form', component: CheckTripFormComponent },
  { path: 'details/:id', component: CheckTripDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
