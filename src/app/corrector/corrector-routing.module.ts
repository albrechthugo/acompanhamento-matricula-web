import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorrectorComponent } from './corrector.component';

const correctorRoutes: Routes = [
  { path: '', component: CorrectorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(correctorRoutes)],
  exports: [RouterModule]
})
export class CorrectorRoutingModule { }
