import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroHomeComponent } from './intro-home.component';

describe('IntroHomeComponent', () => {
  let component: IntroHomeComponent;
  let fixture: ComponentFixture<IntroHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
