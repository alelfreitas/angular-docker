import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { RadarComponent } from './consulta/radar.component';
import { RadarListaComponent } from './radar-lista/radar-lista.component';


@NgModule({
    declarations: [
        RadarComponent,
        RadarListaComponent ],
    imports: [
        HttpClientModule,
        CommonModule],
    exports: [ RadarComponent, RadarListaComponent ]
})

export class RadarModule {}
