import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioDetailsComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule
  ]
})
export class PortfolioModule { }
