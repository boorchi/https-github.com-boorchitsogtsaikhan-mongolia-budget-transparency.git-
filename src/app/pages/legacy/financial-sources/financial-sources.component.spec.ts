import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialSourcesComponent } from './financial-sources.component';

describe('FinancialSourcesComponent', () => {
  let component: FinancialSourcesComponent;
  let fixture: ComponentFixture<FinancialSourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialSourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
