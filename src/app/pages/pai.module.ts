import { NgModule } from '@angular/core';
import { PaiComponent } from './pai.component';
import { Filho1Component } from './filho1.component';
import { Filho2Component } from './filho2.component';
import { PaiRoutingModule } from './pai.routing';
@NgModule({
declarations:[
    PaiComponent,
    Filho1Component,
    Filho2Component
],
imports:[
    PaiRoutingModule,
],
exports:[

],
providers:[]

})
export class PaiModule {}