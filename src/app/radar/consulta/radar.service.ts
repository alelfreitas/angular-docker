import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Radar } from './radar';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class RadarService {

    constructor(private http: HttpClient) {}

    listaRecomendacao(papel: string): Radar[] {
        // return this.http
        //     .get<Radar[]>(API + '/enderecoApi/' + papel);
        const retorno: Radar[] = [{id: 0, papel, valor: '10.00'}, {id: 1, papel, valor: '12.00'}];
        return retorno;
    }
}
