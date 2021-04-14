import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const vestibularSupportRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'enviarProvaCorrecao'
  },
  {
    path: 'enviarProvaVestibular',
    loadChildren: () => import('./exam/exam.module').then(m => m.ExamModule)
  },
  {
    path: 'enviarProvaCorrecao',
    loadChildren: () => import('./correction/correction.module').then(m => m.CorrectionModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(vestibularSupportRoutes)],
  exports: [RouterModule]
})
export class VestibularSupportRoutingModule { }
