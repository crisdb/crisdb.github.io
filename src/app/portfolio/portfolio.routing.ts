import { Routes } from '@angular/router';
import { PortfolioGridV2Component } from './portfolioGridV2/portfolioGridV2.component';

export const PortfolioRoutes: Routes = [{
  path: '',
  redirectTo: 'portfolio-v1',
  pathMatch: 'full',
  },{
    path: 'portfolio-v2',
    component: PortfolioGridV2Component
}];
