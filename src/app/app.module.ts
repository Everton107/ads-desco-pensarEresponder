import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Filho1Component } from './pages/filho1.component';
import { Filho2Component } from './pages/filho2.component';
import { PaiComponent } from './pages/pai.component';

@NgModule({
  declarations: [
    AppComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
