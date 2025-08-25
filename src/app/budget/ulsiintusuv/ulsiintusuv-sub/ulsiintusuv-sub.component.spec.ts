import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UlsiintusuvSubComponent } from './ulsiintusuv-sub.component';

describe('UlsiintusuvSubComponent', () => {
  let component: UlsiintusuvSubComponent;
  let fixture: ComponentFixture<UlsiintusuvSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlsiintusuvSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UlsiintusuvSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
