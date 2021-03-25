import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorrectionComponent } from './correction.component';

const correctionRoutes: Routes = [
  { path: '', component: CorrectionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(correctionRoutes)],
  exports: [RouterModule]
})
export class CorrectionRoutingModule { }
