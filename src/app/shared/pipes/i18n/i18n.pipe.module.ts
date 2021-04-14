import { I18nPipe } from './i18n.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    I18nPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    I18nPipe
  ]
})
export class i18nPipeModule { }
