import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Radar } from '../consulta/radar';
import { RadarService } from '../consulta/radar.service';

@Component({
  selector: 'app-radar-lista',
  templateUrl: './radar-lista.component.html',
  styleUrls: ['./radar-lista.component.css']
})
export class RadarListaComponent implements OnInit, OnDestroy {

  radares: Radar[] = [];
  // nomePapel = this.activatedRoute.snapshot.params.nomePapel;
  // radares = this.radarService.listaRecomendacao(this.nomePapel);
  filter = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore = true;
  currentPage = 1;
  nomePapel = '';

  constructor(
    private radarService: RadarService,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit() {
    this.nomePapel = this.activatedRoute.snapshot.params.nomePapel;
    this.radares = this.activatedRoute.snapshot.data.radares;
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(): void {
    // é necessário esse metodo para quando trocar de tela nao continuar ocupando a memoria
    this.debounce.unsubscribe();
  }

  load() {
    this.radarService.listaRecomendacaoPaginated(this.filter, this.currentPage++)
      .subscribe(r => {
        this.radares = r;
        if (!this.radares.length) { this.hasMore = false; }
      });
      // .subscribe(radares => {
      //   this.radares.push(... radares);
      //   if (!radares.length) { this.hasMore = false; }
      // });
  }

}
