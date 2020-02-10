import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { RadarComponent } from './consulta/radar.component';
import { RadarListaComponent } from './radar-lista/radar-lista.component';
import { RadaresComponent } from './radar-lista/radares/radares.component';
import { FilterByPapel } from './radar-lista/filter-by-papel.pipe';
import { LoadButtonComponent } from './radar-lista/load-button/load-button.component';


@NgModule({
    declarations: [
        RadarComponent,
        RadarListaComponent,
        RadaresComponent,
        FilterByPapel,
        LoadButtonComponent ],
    imports: [
        HttpClientModule,
        CommonModule],
    exports: [ RadarComponent, RadarListaComponent ]
})

export class RadarModule {}
