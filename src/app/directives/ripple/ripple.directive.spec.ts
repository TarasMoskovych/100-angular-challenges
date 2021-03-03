import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { RippleDirective } from './ripple.directive';

@Component({
  template: '<button appRipple></button>'
})
class TestHostComponent { }

describe('RippleDirective', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let el: DebugElement;
  let directive: RippleDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        RippleDirective,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
    directive = el.query(By.directive(RippleDirective)).injector.get(RippleDirective);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should add class for button', () => {
    expect(el.query(By.css('button')).nativeElement.classList).toContain('ripple');
  });
});
