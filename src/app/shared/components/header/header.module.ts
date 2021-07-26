import { AuthService } from './../../../auth/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { CanShowHeaderDirectiveModule } from '../../directives/can-show-header.directive.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CanShowHeaderDirectiveModule
  ],
  providers: [AuthService],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
