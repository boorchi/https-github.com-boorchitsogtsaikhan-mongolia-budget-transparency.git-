import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OntDetailComponent } from './ont-detail.component';

describe('OntDetailComponent', () => {
  let component: OntDetailComponent;
  let fixture: ComponentFixture<OntDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OntDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OntDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
