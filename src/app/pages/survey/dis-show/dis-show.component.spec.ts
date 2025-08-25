import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisShowComponent } from './dis-show.component';

describe('DisShowComponent', () => {
  let component: DisShowComponent;
  let fixture: ComponentFixture<DisShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
