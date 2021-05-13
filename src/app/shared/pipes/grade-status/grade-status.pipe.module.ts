import { GradeStatusPipe } from './grade-status.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [GradeStatusPipe],
  exports: [GradeStatusPipe],
  imports: [
    CommonModule
  ]
})
export class GradeStatusPipeModule { }
