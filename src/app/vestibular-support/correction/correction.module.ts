import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BlockUIModule } from 'primeng/blockui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorrectionRoutingModule } from './correction-routing.module';
import { CorrectionComponent } from './correction.component';
import { RouterModule } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [CorrectionComponent],
  imports: [
    CommonModule,
    CorrectionRoutingModule,
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
export class CorrectionModule { }
