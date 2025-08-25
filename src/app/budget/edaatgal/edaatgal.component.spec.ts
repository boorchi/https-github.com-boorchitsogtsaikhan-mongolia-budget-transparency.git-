import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdaatgalComponent } from './edaatgal.component';

describe('EdaatgalComponent', () => {
  let component: EdaatgalComponent;
  let fixture: ComponentFixture<EdaatgalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdaatgalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdaatgalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
