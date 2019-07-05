import { NgModule } from '@angular/core';
import { RouterModule, Routes,  } from '@angular/router';
import { BookkeepingComponent } from './bookkeeping.component';


const routes: Routes = [
    {path:'', component: BookkeepingComponent}
   
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
    
})
export class BookkeepingRoutingModule {}