import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicSecretaryComponent } from './academic-secretary.component';

const academicSecretaryRoutes: Routes = [
  { path: '', component: AcademicSecretaryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(academicSecretaryRoutes)],
  exports: [RouterModule]
})
export class AcademicSecretaryRoutingModule { }
