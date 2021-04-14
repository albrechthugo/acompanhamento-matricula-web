import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const secretaryRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./academic-secretary/academic-secretary.module').then(m => m.AcademicSecretaryModule)
  },
  {
    path: 'uploadDocumentos',
    loadChildren: () => import('./upload-docs/upload-docs.module').then(m => m.UploadDocsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(secretaryRoutes)],
  exports: [RouterModule]
})
export class SecretaryRoutingModule { }
