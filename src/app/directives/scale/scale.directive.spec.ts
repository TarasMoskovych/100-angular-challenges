import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ScaleDirective } from './scale.directive';

@Component({
  template: '<p appScale>Test</p>'
})
class TestHostComponent { }

describe('ScaleDirective', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let el: DebugElement;
  let p: DebugElement;
  let directive: ScaleDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        ScaleDirective,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement;
    p = el.query(By.css('p'));
    directive = el.query(By.directive(ScaleDirective)).injector.get(ScaleDirective);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should add styles on "mouseover"', () => {
    p.triggerEventHandler('mouseover', null);
    expect(p.nativeElement.style.transform).toBe('scale(1.25)');
  });

  it('should remove styles on "mouseout"', () => {
    p.triggerEventHandler('mouseout', null);
    expect(p.nativeElement.style.transform).toBe('');
  });
});
