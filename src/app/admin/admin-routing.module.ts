import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const adminRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cadastro'
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'solicitacoes',
    loadChildren: () => import('./requests/requests.module').then(m => m.RequestsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
