import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TetrisComponent } from './tetris/tetris.component';
import { BookkeepingModule } from './bookkeeping/bookkeeping.module';

@NgModule({
    declarations:[
        TetrisComponent
    ],
    imports: [
        CommonModule,
        BookkeepingModule
    ]
})
export class ProjectModule {}