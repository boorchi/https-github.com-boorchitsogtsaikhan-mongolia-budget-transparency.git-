import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepopupComponent } from './homepopup.component';

describe('HomepopupComponent', () => {
  let component: HomepopupComponent;
  let fixture: ComponentFixture<HomepopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
