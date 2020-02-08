import { Component,  Input } from '@angular/core';


@Component({
    selector: 'app-radar',
    templateUrl: './radar.component.html'
})

export class RadarComponent {

    @Input() nomePapel = '';
    @Input() valor = '';

}
