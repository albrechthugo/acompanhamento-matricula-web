import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicSecretaryRoutingModule } from './academic-secretary-routing.module';
import { AcademicSecretaryComponent } from './academic-secretary.component';
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
import { WidgetModule } from '../../shared/components/widget/widget.module';

@NgModule({
  declarations: [AcademicSecretaryComponent],
  imports: [
    CommonModule,
    AcademicSecretaryRoutingModule,
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
    ToastModule,
    WidgetModule
  ],
  providers: [MessageService]
})
export class AcademicSecretaryModule { }
