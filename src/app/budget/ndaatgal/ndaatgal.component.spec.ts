import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdaatgalComponent } from './ndaatgal.component';

describe('NdaatgalComponent', () => {
  let component: NdaatgalComponent;
  let fixture: ComponentFixture<NdaatgalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdaatgalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdaatgalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
