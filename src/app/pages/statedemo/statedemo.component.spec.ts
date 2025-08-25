import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatedemoComponent } from './statedemo.component';

describe('StatedemoComponent', () => {
  let component: StatedemoComponent;
  let fixture: ComponentFixture<StatedemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatedemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
