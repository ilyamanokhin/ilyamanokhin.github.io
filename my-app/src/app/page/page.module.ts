import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponent } from './page.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PageRoutingModule } from './page-routing.module';
import { ProjectModule } from './project/project.module';
import { PortfolioModule } from './portfolio/portfolio.module';




@NgModule({
    declarations:[
        PageComponent,
        HomeComponent,
        ProjectComponent,
        PortfolioComponent,
        
    ],
    imports: [
        CommonModule,
        PageRoutingModule,
        ProjectModule,
        PortfolioModule
    ]
})
export class PageModule {}