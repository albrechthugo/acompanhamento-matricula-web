import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentTypePipePipe } from './document-type-pipe.pipe';

@NgModule({
  declarations: [DocumentTypePipePipe],
  exports: [DocumentTypePipePipe],
  imports: [CommonModule]
})
export class DocumentTypePipeModule { }
