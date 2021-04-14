import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationRequestComponent } from './registration-request.component';

const registrationRequestRoutes: Routes = [
  { path: '', component: RegistrationRequestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(registrationRequestRoutes)],
  exports: [RouterModule]
})
export class RegistrationRequestRoutingModule { }
