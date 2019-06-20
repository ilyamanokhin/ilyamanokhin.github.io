import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations:[
        AuthComponent,
        LoginComponent,
        RegistrationComponent,
    ],
    imports:[
        CommonModule,
        AuthRoutingModule
    ]
})
export class AuthModule {}