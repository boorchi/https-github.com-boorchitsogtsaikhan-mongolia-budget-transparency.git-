import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodlogoComponent } from './bodlogo.component';

describe('BodlogoComponent', () => {
  let component: BodlogoComponent;
  let fixture: ComponentFixture<BodlogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodlogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
