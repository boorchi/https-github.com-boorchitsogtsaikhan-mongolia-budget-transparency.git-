import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZasgiinzeelComponent } from './zasgiinzeel.component';

describe('ZasgiinzeelComponent', () => {
  let component: ZasgiinzeelComponent;
  let fixture: ComponentFixture<ZasgiinzeelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZasgiinzeelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZasgiinzeelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
