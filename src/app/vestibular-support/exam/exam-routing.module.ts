import { ExamComponent } from './exam.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const examRoutes: Routes = [
  { path: '', component: ExamComponent }
];

@NgModule({
  imports: [RouterModule.forChild(examRoutes)],
  exports: [RouterModule]
})
export class ExamRoutingModule { }
