import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';


@NgModule({
    declarations:[
        PageComponent,
    ],
    imports: [
        CommonModule,
        PageRoutingModule,
        HomeModule,
    ]
})
export class PageModule {}