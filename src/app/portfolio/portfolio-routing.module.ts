import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { PortfolioComponent } from './portfolio.component';

const routes: Routes = [
    { path: '', component: PortfolioComponent },
    { path: '/:slug', component: PortfolioDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
