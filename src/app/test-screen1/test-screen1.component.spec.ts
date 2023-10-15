import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestScreen1Component } from './test-screen1.component';

describe('TestScreen1Component', () => {
  let component: TestScreen1Component;
  let fixture: ComponentFixture<TestScreen1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestScreen1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestScreen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
