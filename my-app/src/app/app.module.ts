import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageComponent } from './page/page.component';
import { PageModule } from './page/page.module';
import { TetrisComponent } from './page/home/project/tetris/tetris.component';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
