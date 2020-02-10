import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { RadarService } from '../consulta/radar.service';
import { Radar } from '../consulta/radar';

@Injectable({ providedIn: 'root' })
export class RadarListResolver implements Resolve<Radar[]> {

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): // incluir aqui o Observable quando d API
     Radar[] | Radar[] | Promise<Radar[]> {
        const nomePapel = route.params.nomePapel;
        // return this.radarService.listaRecomendacao(nomePapel).subscribe(papel => this.papel = papel);
        return this.service.listaRecomendacao(nomePapel);
    }

    constructor(private service: RadarService) {

    }
}
