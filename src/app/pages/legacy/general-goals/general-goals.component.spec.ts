import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralGoalsComponent } from './general-goals.component';

describe('GeneralGoalsComponent', () => {
  let component: GeneralGoalsComponent;
  let fixture: ComponentFixture<GeneralGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralGoalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
