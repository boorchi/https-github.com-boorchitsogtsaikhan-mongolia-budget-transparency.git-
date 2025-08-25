import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpendataComponent } from './opendata.component';

describe('OpendataComponent', () => {
  let component: OpendataComponent;
  let fixture: ComponentFixture<OpendataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpendataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpendataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
