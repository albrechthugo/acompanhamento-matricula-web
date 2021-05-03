import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadDocsComponent } from './upload-docs.component';

const uploadRoutes: Routes = [
  { path: ':id', component: UploadDocsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(uploadRoutes)],
  exports: [RouterModule]
})
export class UploadDocsRoutingModule { }
