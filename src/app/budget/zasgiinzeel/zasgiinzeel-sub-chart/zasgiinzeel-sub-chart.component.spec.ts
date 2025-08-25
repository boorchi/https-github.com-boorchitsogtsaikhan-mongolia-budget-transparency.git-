import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZasgiinzeelSubChartComponent } from './zasgiinzeel-sub-chart.component';

describe('ZasgiinzeelSubChartComponent', () => {
  let component: ZasgiinzeelSubChartComponent;
  let fixture: ComponentFixture<ZasgiinzeelSubChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZasgiinzeelSubChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZasgiinzeelSubChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
