import { RoleGuard } from './shared/guards/role/role.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./core/dashboard/dashboard.module').then(m => m.DashboardModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'solicitarCadastro',
    loadChildren: () => import('./registration-request/registration-request.module').then(m => m.RegistrationRequestModule)
  },
  {
    path: 'relacaoMercado',
    loadChildren: () => import('./market-relationship/market-relationship.module').then(m => m.MarketRelationshipModule),
    canLoad: [AuthGuard],
    canActivate: [RoleGuard]
  },
  {
    path: 'apoioVestibular',
    loadChildren: () => import('./vestibular-support/vestibular-support.module').then(m => m.VestibularSupportModule),
    canLoad: [AuthGuard],
    canActivate: [RoleGuard]
  },
  {
    path: 'secretaria',
    loadChildren: () => import('./secretary/secretary.module').then(m => m.SecretaryModule),
    canLoad: [AuthGuard],
    canActivate: [RoleGuard]
  },
  {
    path: 'financeiro',
    loadChildren: () => import('./financial/financial.module').then(m => m.FinancialModule),
    canLoad: [AuthGuard],
    canActivate: [RoleGuard]
  },
  {
    path: 'correcaoProva',
    loadChildren: () => import('./corrector/corrector.module').then(m => m.CorrectorModule),
    canLoad: [AuthGuard],
    canActivate: [RoleGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AuthGuard],
    canActivate: [RoleGuard]
  },
  {
    path: 'relatorioMatriculas',
    loadChildren: () => import('./report/report.module').then(m => m.ReportModule),
    canLoad: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
