import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ProjectComponent } from './project/project.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TetrisComponent } from './project/tetris/tetris.component';
import { HomeRoutingModule } from './home-routing.module';
import { VrJazzComponent } from './portfolio/vr-jazz/vr-jazz.component';
import { BookkeepingModule } from './project/bookkeeping/bookkeeping.module';

@NgModule({
    declarations:[
        HomeComponent,
        ProjectComponent,
        PortfolioComponent,
        TetrisComponent,
        VrJazzComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        BookkeepingModule
    ]
})
export class HomeModule {}