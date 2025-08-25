import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NchartComponent } from './nchart.component';

describe('NchartComponent', () => {
  let component: NchartComponent;
  let fixture: ComponentFixture<NchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
