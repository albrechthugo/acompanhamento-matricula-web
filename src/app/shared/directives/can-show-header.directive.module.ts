import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanShowHeaderDirective } from './can-show-header.directive';

@NgModule({
  declarations: [
    CanShowHeaderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CanShowHeaderDirective
  ]
})
export class CanShowHeaderDirectiveModule { }
