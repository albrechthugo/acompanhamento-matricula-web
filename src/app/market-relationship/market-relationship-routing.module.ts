import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketRelationshipComponent } from './market-relationship.component';

const marketRelationshipRoutes: Routes = [
  { path: '', component: MarketRelationshipComponent }
];

@NgModule({
  imports: [RouterModule.forChild(marketRelationshipRoutes)],
  exports: [RouterModule]
})
export class MarketRelationshipRoutingModule { }
