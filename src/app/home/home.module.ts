import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ClientsComponent } from './components/clients/clients.component';
import { BlogComponent } from './components/blog/blog.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TeamComponent } from './components/team/team.component';
import { SkillsComponent } from './components/skills/skills.component';
import { MilestonesComponent } from './components/milestones/milestones.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
      HomeComponent,
      HeroComponent,
      AboutComponent,
      ServicesComponent,
      ClientsComponent,
      BlogComponent,
      PortfolioComponent,
      PricingComponent,
      TeamComponent,
      SkillsComponent,
      MilestonesComponent,
      ContactComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
