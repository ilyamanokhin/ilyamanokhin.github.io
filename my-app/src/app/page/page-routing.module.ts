import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TetrisComponent } from './project/tetris/tetris.component';
import { VrJazzComponent } from './portfolio/vr-jazz/vr-jazz.component';
import { EvakuatorComponent } from './portfolio/evakuator/evakuator.component';
import { FinansvestComponent } from './portfolio/finansvest/finansvest.component';
import { PulsarComponent } from './portfolio/pulsar/pulsar.component';
import { DanfossComponent } from './portfolio/danfoss/danfoss.component';
import { ObedMasterComponent } from './portfolio/obed-master/obed-master.component';



// путь между страницами сайта с хедером
const routes: Routes = [
  {path:'', component:PageComponent, children:[
    {path:'', component: HomeComponent},
    {path:'project', component: ProjectComponent},
    {path:'portfolio', component: PortfolioComponent},
  ]},
  // my-projects
  {path:'tetris', component: TetrisComponent},
  {path:'bookkeeping', redirectTo:'login', pathMatch: 'full'},
  // my-works
  {path:'vr-jazz', component: VrJazzComponent},
  {path:'evakuator', component: EvakuatorComponent},
  {path:'finansvest', component: FinansvestComponent},
  {path:'pulsar', component: PulsarComponent},
  {path:'danfoss', component: DanfossComponent},
  {path:'obed_ru', component: ObedMasterComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
