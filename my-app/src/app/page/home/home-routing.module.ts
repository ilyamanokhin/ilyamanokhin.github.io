import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// нужен для роутов внутри home
const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
