import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfMaskPipe } from './cpf-mask.pipe';

@NgModule({
  declarations: [
    CpfMaskPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CpfMaskPipe
  ]
})
export class CpfMaskModule { }
