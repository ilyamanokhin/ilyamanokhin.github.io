import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './home/project/project.component';
import { TetrisComponent } from './home/project/tetris/tetris.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';


const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'project', component: ProjectComponent},
    {path:'tetris', component: TetrisComponent},
    {path:'portfolio', component: PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
