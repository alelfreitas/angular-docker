import { Component, OnInit } from '@angular/core';

import { RadarService } from '../consulta/radar.service';
import { Radar } from '../consulta/radar';

@Component({
  selector: 'app-radar-lista',
  templateUrl: './radar-lista.component.html',
  styleUrls: ['./radar-lista.component.css']
})
export class RadarListaComponent implements OnInit {

  papels = this.radarService.listaRecomendacao('PETR4');

  constructor(private radarService: RadarService) {}

  ngOnInit(): void {
      // this.radarService.listaRecomendacao('PETR4').subscribe(papel => this.papel = papel);
  }

}
