import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home/home-routing.module';
import { ProjectComponent } from './home/project/project.component';
import { TetrisComponent } from './home/project/tetris/tetris.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';
import { HomeModule } from './home/home.module';



@NgModule({
    declarations:[
        
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeModule,
        HomeRoutingModule,
    ]
})
export class PageModule {}