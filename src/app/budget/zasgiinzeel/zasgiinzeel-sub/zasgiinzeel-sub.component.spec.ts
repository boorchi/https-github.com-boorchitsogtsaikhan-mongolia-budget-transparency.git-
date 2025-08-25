import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZasgiinzeelSubComponent } from './zasgiinzeel-sub.component';

describe('ZasgiinzeelSubComponent', () => {
  let component: ZasgiinzeelSubComponent;
  let fixture: ComponentFixture<ZasgiinzeelSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZasgiinzeelSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZasgiinzeelSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
