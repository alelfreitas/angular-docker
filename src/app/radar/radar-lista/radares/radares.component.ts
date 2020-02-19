import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Radar } from '../../consulta/radar';
import { RadarService } from '../../consulta/radar.service';

@Component({
  selector: 'app-radares',
  templateUrl: './radares.component.html',
  styleUrls: ['./radares.component.css']
})
export class RadaresComponent implements OnChanges {

  @Input() radares: Radar[] = [];
  displayedColumns: string[] = ['Papel', 'Valor', 'Ação'];

  constructor(private radarService: RadarService) { }

  ngOnChanges(changes: SimpleChanges) {
  }

}
