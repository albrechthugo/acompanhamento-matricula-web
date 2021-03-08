import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LoginRoutingModule,
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    InputTextModule
  ]
})
export class LoginModule { }
