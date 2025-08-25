import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitConceptDetailComponent } from './debit-concept-detail.component';

describe('DebitConceptDetailComponent', () => {
  let component: DebitConceptDetailComponent;
  let fixture: ComponentFixture<DebitConceptDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitConceptDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitConceptDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
