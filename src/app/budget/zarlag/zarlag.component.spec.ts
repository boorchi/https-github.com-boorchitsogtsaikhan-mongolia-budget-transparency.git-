import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZarlagComponent } from './zarlag.component';

describe('ZarlagComponent', () => {
  let component: ZarlagComponent;
  let fixture: ComponentFixture<ZarlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZarlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZarlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
