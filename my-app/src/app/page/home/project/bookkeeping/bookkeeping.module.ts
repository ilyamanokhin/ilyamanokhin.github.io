import { NgModule } from '@angular/core';
import { BookkeepingRoutingModule } from './bookkeeping-routing.module';
import { AuthModule } from './auth/auth.module';
import { BookkeepingComponent } from './bookkeeping.component';

@NgModule({
    declarations:[
        BookkeepingComponent
    ],
    imports:[
        AuthModule,
        BookkeepingRoutingModule,
        
        
    ]
})
export class BookkeepingModule {}