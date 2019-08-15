import { Routes } from '@angular/router';

import { PortfolioGridV2Component } from './portfolioGridV2/portfolioGridV2.component';
import { PortfolioGridV3Component } from './portfolioGridV3/portfolioGridV3.component';
import {PortfolioGridV3DetailsComponent} from "./portfolioGridV3/portfolioGridV3Details/portfolioV3Details.component";

export const PortfolioRoutes: Routes = [{
  path: '',
  redirectTo: 'portfolio-v2',
  pathMatch: 'full',
  },{
  path: '',
  children: [{
    path: 'portfolio-v2',
    component: PortfolioGridV2Component
  },{
    path: 'portfolio-v3',
    component: PortfolioGridV3Component
  }, {
    path: 'portfolio-v3-details',
    component: PortfolioGridV3DetailsComponent
  }

  ]
}];
