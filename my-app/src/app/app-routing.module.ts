import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProjectComponent } from './page/home/project/project.component';
import { TetrisComponent } from './page/home/project/tetris/tetris.component';
import { PortfolioComponent } from './page/home/portfolio/portfolio.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'tetris', component: TetrisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
