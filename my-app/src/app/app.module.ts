import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookkeepingModule } from './bookkeeping/bookkeeping.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookkeepingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
