import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaytradeComponent } from './daytrade.component';

describe('DaytradeComponent', () => {
  let component: DaytradeComponent;
  let fixture: ComponentFixture<DaytradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaytradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaytradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
