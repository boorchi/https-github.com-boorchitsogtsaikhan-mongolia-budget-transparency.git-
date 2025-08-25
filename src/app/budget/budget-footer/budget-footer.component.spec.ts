import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetFooterComponent } from './budget-footer.component';

describe('BudgetFooterComponent', () => {
  let component: BudgetFooterComponent;
  let fixture: ComponentFixture<BudgetFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
