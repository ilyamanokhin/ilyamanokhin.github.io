import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TetrisComponent } from './page/home/project/tetris/tetris.component';
import { VrJazzComponent } from './page/home/portfolio/vr-jazz/vr-jazz.component';


// конечный путь проекта или проекта-сайта без хедера
const routes: Routes = [
  {path:'tetris', component: TetrisComponent},
  {path:'vr-jazz', component: VrJazzComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
