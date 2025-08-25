import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrlogoComponent } from './orlogo.component';

describe('OrlogoComponent', () => {
  let component: OrlogoComponent;
  let fixture: ComponentFixture<OrlogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrlogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
