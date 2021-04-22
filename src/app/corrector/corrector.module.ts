import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BlockUIModule } from 'primeng/blockui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorrectorRoutingModule } from './corrector-routing.module';
import { CorrectorComponent } from './corrector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
  declarations: [
    CorrectorComponent
  ],
  imports: [
    CommonModule,
    CorrectorRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BlockUIModule,
    ProgressSpinnerModule,
    ToastModule,
    ButtonModule,
    ConfirmDialogModule,
    InputTextModule,
    InputNumberModule
  ],
  providers: [
    MessageService
  ]
})
export class CorrectorModule { }
