import { i18nPipeModule } from './../../shared/pipes/i18n/i18n.pipe.module';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsRoutingModule } from './requests-routing.module';
import { RequestsComponent } from './requests.component';
import { MenuModule } from 'primeng/menu';
import { AccordionModule } from 'primeng/accordion';
import { CpfMaskModule } from 'src/app/shared/pipes/cpf-mask/cpf-mask.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SplitButtonModule } from 'primeng/splitbutton';

@NgModule({
  declarations: [
    RequestsComponent,
  ],
  imports: [
    CommonModule,
    RequestsRoutingModule,
    MenuModule,
    RouterModule,
    ButtonModule,
    AccordionModule,
    CpfMaskModule,
    i18nPipeModule,
    ConfirmDialogModule,
    SplitButtonModule
  ],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class RequestsModule { }
