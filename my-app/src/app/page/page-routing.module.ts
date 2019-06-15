import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './home/project/project.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';

const routes: Routes = [
  {path:'', component:HomeComponent, children:[
    {path:'project', component: ProjectComponent},
    {path:'portfolio', component: PortfolioComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
