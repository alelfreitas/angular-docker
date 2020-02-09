import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { RadarService } from '../consulta/radar.service';
import { Radar } from '../consulta/radar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-radar-lista',
  templateUrl: './radar-lista.component.html',
  styleUrls: ['./radar-lista.component.css']
})
export class RadarListaComponent implements OnChanges {

  nomePapel = this.activatedRoute.snapshot.params.nomePapel;
  radares = this.radarService.listaRecomendacao(this.nomePapel);
  filter = '';

  constructor(
    private radarService: RadarService,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnChanges(changes: SimpleChanges) {
    // const nomePapel = this.activatedRoute.snapshot.params.nomePapel;
      // this.radarService.listaRecomendacao(nomePapel).subscribe(papel => this.papel = papel);
  }

}
