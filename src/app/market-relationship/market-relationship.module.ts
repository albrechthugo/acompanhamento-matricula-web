import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketRelationshipRoutingModule } from './market-relationship-routing.module';
import { MarketRelationshipComponent } from './market-relationship.component';
import { MenuModule } from 'primeng/menu';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { BlockUIModule } from 'primeng/blockui';
import { MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    MarketRelationshipComponent
  ],
  imports: [
    CommonModule,
    MarketRelationshipRoutingModule,
    MenuModule,
    RouterModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    ToastModule,
    BlockUIModule,
    ProgressSpinnerModule
  ],
  providers: [MessageService]
})
export class MarketRelationshipModule { }
