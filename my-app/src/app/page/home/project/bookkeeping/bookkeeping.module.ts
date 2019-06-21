import { NgModule } from '@angular/core';
import { BookkeepingRoutingModule } from './bookkeeping-routing.module';
import { AuthModule } from './auth/auth.module';
import { BookkeepingComponent } from './bookkeeping.component';
import { AuthService } from './shared/services/auth.service';
import { UsersService } from './shared/services/user.services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations:[
        BookkeepingComponent
    ],
    imports:[
        AuthModule,
        BookkeepingRoutingModule,
        HttpClientModule,
        
    ],
    providers:[
        UsersService,
        AuthService
    ]
})
export class BookkeepingModule {}