import { Component, OnInit } from '@angular/core';

import { RadarService } from '../consulta/radar.service';
import { Radar } from '../consulta/radar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-radar-lista',
  templateUrl: './radar-lista.component.html',
  styleUrls: ['./radar-lista.component.css']
})
export class RadarListaComponent implements OnInit {

  nomePapel = this.activatedRoute.snapshot.params.nomePapel;
  papels = this.radarService.listaRecomendacao(this.nomePapel);

  constructor(
    private radarService: RadarService,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
      // this.radarService.listaRecomendacao('PETR4').subscribe(papel => this.papel = papel);
  }

}
