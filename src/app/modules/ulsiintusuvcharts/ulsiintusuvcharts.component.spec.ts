import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UlsiintusuvchartsComponent } from './ulsiintusuvcharts.component';

describe('UlsiintusuvchartsComponent', () => {
  let component: UlsiintusuvchartsComponent;
  let fixture: ComponentFixture<UlsiintusuvchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlsiintusuvchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UlsiintusuvchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
