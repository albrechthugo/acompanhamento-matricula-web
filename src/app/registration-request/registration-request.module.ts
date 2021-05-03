import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRequestComponent } from './registration-request.component';
import { RegistrationRequestRoutingModule } from './registration-request-routing.module';
import { ButtonModule } from 'primeng/button';
import { CpfMaskModule } from '../shared/pipes/cpf-mask/cpf-mask.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    RegistrationRequestComponent
  ],
  imports: [
    CommonModule,
    RegistrationRequestRoutingModule,
    ButtonModule,
    CpfMaskModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DropdownModule,
    InputTextModule,
    BlockUIModule,
    ProgressSpinnerModule,
    ToastModule
  ],
  providers: [MessageService]
})
export class RegistrationRequestModule { }
