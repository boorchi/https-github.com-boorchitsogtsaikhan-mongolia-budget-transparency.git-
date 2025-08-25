import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorFinancingComponent } from './sector-financing.component';

describe('SectorFinancingComponent', () => {
  let component: SectorFinancingComponent;
  let fixture: ComponentFixture<SectorFinancingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectorFinancingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorFinancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
