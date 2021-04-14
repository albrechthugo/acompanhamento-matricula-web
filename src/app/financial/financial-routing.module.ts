import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialComponent } from './financial.component';

const financialRoutes: Routes = [
  { path: '', component: FinancialComponent }
];

@NgModule({
  imports: [RouterModule.forChild(financialRoutes)],
  exports: [RouterModule]
})
export class FinancialRoutingModule { }
