import { NgModule } from '@angular/core';
import { BookkeepingRoutingModule } from './bookkeeping-routing.module';
import { AuthModule } from './auth/auth.module';
import { BookkeepingComponent } from './bookkeeping.component';
import { AuthService } from './shared/services/auth.service';
import { UsersService } from './shared/services/user.services';
import { HttpClientModule } from '@angular/common/http';
import { SystemModule } from './system/system.module';

@NgModule({
    declarations:[
        BookkeepingComponent
    ],
    imports:[
        AuthModule,
        SystemModule,
        BookkeepingRoutingModule,
        HttpClientModule,
        
    ],
    providers:[
        UsersService,
        AuthService
    ]
})
export class BookkeepingModule {}