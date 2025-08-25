import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnifiedBudgetComponent } from './unified-budget.component';

describe('UnifiedBudgetComponent', () => {
  let component: UnifiedBudgetComponent;
  let fixture: ComponentFixture<UnifiedBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnifiedBudgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnifiedBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
