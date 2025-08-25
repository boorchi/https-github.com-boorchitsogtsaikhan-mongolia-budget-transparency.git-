import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrlogoSubComponent } from './orlogo-sub.component';

describe('OrlogoSubComponent', () => {
  let component: OrlogoSubComponent;
  let fixture: ComponentFixture<OrlogoSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrlogoSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrlogoSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
