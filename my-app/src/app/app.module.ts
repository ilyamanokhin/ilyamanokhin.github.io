import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './shared/services/auth.service';
import { UsersService } from './shared/services/user.services';
import { AuthModule } from './auth/auth.module';
import { SystemModule } from './system/system.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    SystemModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
