import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitConceptComponent } from './debit-concept.component';

describe('DebitConceptComponent', () => {
  let component: DebitConceptComponent;
  let fixture: ComponentFixture<DebitConceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitConceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
