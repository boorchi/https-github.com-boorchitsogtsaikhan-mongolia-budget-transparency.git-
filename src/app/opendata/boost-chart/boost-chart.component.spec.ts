import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostChartComponent } from './boost-chart.component';

describe('BoostChartComponent', () => {
  let component: BoostChartComponent;
  let fixture: ComponentFixture<BoostChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoostChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoostChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
