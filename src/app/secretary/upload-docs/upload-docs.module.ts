import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadDocsRoutingModule } from './upload-docs-routing.module';
import { UploadDocsComponent } from './upload-docs.component';
import { RouterModule } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [UploadDocsComponent],
  imports: [
    CommonModule,
    UploadDocsRoutingModule,
    RouterModule,
    MenuModule,
    TabMenuModule,
    InputTextModule,
    FileUploadModule,
    ButtonModule,
    ConfirmDialogModule,
    FormsModule,
    ReactiveFormsModule,
    BlockUIModule,
    ProgressSpinnerModule,
    ToastModule
  ],
  providers: [MessageService]
})
export class UploadDocsModule { }
