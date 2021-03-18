import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
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
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
