import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseNumberComponent } from './base-number.component';

describe('BaseNumberComponent', () => {
  let component: BaseNumberComponent;
  let fixture: ComponentFixture<BaseNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
