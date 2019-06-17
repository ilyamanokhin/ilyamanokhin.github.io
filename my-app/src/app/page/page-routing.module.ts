import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { PortfolioComponent } from './home/portfolio/portfolio.component';
import { PageComponent } from './page.component';
import { ProjectComponent } from './home/project/project.component';


// путь между страницами сайта с хедером
const routes: Routes = [
  {path:'', component:PageComponent, children:[
    {path:'', component: HomeComponent},
    {path:'project', component: ProjectComponent},
    {path:'portfolio', component: PortfolioComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
