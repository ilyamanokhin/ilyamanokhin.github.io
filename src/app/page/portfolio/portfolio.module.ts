import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VrJazzComponent } from './vr-jazz/vr-jazz.component';
import { EvakuatorComponent } from './evakuator/evakuator.component';
import { FinansvestComponent } from './finansvest/finansvest.component';
import { PulsarComponent } from './pulsar/pulsar.component';
import { DanfossComponent } from './danfoss/danfoss.component';
import { ObedMasterComponent } from './obed-master/obed-master.component';

@NgModule({
    declarations:[
        VrJazzComponent,
        EvakuatorComponent,
        FinansvestComponent,
        PulsarComponent,
        DanfossComponent,
        ObedMasterComponent,
    ],
    imports: [
        CommonModule,
    ]
})
export class PortfolioModule {}