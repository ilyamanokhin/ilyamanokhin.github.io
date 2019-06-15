import { NgModule } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { TetrisComponent } from './project/tetris/tetris.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


@NgModule({
    declarations:[
        HomeComponent,
        ProjectComponent,
        TetrisComponent,
        PortfolioComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
    ]
})
export class HomeModule {}