import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


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

    listaRecomendacaoPaginated(papel: string, page: number): Observable<Radar[]> {
        const retorno: Radar[] = [
            {id: 0, papel: 'ABEV3', valor: '10.00'}, {id: 1, papel: 'ABEV3', valor: '12.00'}, {id: 2, papel: 'ABEV3', valor: '3.00'},
            {id: 0, papel: 'PETR4', valor: '9.00'}, {id: 1, papel: 'PETR4', valor: '11.00'}, {id: 2, papel: 'PETR4', valor: '4.00'},
            {id: 0, papel: 'KROT3', valor: '7.00'}, {id: 1, papel: 'KROT3', valor: '15.00'}, {id: 2, papel: 'KROT3', valor: '1.00'}
        ];
        return of(retorno.filter(p => p.papel === papel));

        // const params = new HttpParams().append('page', page.toString());
        // this.http
        //     .get<Radar[]>(API + '/' + papel + '/', { params });
    }
}
