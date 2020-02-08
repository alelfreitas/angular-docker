import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RadarModule } from './radar/radar.module';
import { DaytradeComponent } from './daytrade/daytrade.component';

@NgModule({
  declarations: [
    AppComponent,
    DaytradeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RadarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
