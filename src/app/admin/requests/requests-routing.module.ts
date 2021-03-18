import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestsComponent } from './requests.component';

const requestsRoutes: Routes = [
  { path: '', component: RequestsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(requestsRoutes)],
  exports: [RouterModule]
})
export class RequestsRoutingModule { }
