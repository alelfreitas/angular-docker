import { Component,  Input } from '@angular/core';
import { Radar } from './radar';


@Component({
    selector: 'app-radar',
    templateUrl: './radar.component.html',
    styleUrls: ['./radar.component.css']
})

export class RadarComponent {

    @Input() nomePapel = '';
    @Input() valor = '';
    @Input() dataSource: Radar[];

}
