import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PortfolioRoutes } from './portfolio.routing';
import { WidgetsModule } from '../widgets/widgets.module';

import { PortfolioGridV2Component } from './portfolioGridV2/portfolioGridV2.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(PortfolioRoutes),
    WidgetsModule
  ],
  declarations: [ 
  	PortfolioGridV2Component
  ]
})
export class PortfolioModule { }
