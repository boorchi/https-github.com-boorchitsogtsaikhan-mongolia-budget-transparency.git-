import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoviddemoComponent } from './coviddemo.component';

describe('CoviddemoComponent', () => {
  let component: CoviddemoComponent;
  let fixture: ComponentFixture<CoviddemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoviddemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoviddemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
