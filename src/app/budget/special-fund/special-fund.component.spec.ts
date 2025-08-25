import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialFundComponent } from './special-fund.component';

describe('SpecialFundComponent', () => {
  let component: SpecialFundComponent;
  let fixture: ComponentFixture<SpecialFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
