import { Pipe, PipeTransform } from '@angular/core';

import { Radar } from '../consulta/radar';
import { RadarService } from '../consulta/radar.service';

@Pipe({ name: 'filterByPapel'})
export class FilterByPapel implements PipeTransform {

    constructor(private radarService: RadarService) { }

    transform(radares: Radar[], papelQuery: string) {
        papelQuery = papelQuery
            .trim()
            .toUpperCase();

        if (papelQuery) {
            if (papelQuery.length > 4) {
                return this.radarService.listaRecomendacao(papelQuery);
            }
        } else {
            return radares;
        }
    }

}
