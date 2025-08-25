import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZasgiinzeelChartComponent } from './zasgiinzeel-chart.component';

describe('ZasgiinzeelChartComponent', () => {
  let component: ZasgiinzeelChartComponent;
  let fixture: ComponentFixture<ZasgiinzeelChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZasgiinzeelChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZasgiinzeelChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
