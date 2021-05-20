import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DatePipe } from '../date/date.pipe';

@NgModule({
  declarations: [DatePipe],
  exports: [DatePipe],
  imports: [CommonModule]
})
export class DatePipeModule { }
