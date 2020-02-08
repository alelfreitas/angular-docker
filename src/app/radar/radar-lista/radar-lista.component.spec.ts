import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarListaComponent } from './radar-lista.component';

describe('RadarListaComponent', () => {
  let component: RadarListaComponent;
  let fixture: ComponentFixture<RadarListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadarListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
