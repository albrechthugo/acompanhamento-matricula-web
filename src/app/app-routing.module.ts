import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./core/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'solicitarCadastro',
    loadChildren: () => import('./registration-request/registration-request.module').then(m => m.RegistrationRequestModule)
  },
  {
    path: 'relacaoMercado',
    loadChildren: () => import('./market-relationship/market-relationship.module').then(m => m.MarketRelationshipModule)
  },
  {
    path: 'apoioVestibular',
    loadChildren: () => import('./vestibular-support/vestibular-support.module').then(m => m.VestibularSupportModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
