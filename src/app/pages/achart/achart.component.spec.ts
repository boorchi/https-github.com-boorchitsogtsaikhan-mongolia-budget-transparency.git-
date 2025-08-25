import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchartComponent } from './achart.component';

describe('AchartComponent', () => {
  let component: AchartComponent;
  let fixture: ComponentFixture<AchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
