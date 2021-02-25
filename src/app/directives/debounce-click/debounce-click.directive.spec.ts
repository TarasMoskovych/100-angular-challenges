import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DebounceClickDirective } from './debounce-click.directive';

@Component({
  template: `<button appDebounceClick (debouncedClick)="onClick()">Click</button>`
})
class TestHostComponent {
  onClick() {}
}

describe('DebounceClickDirective', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let directive: DebounceClickDirective;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DebounceClickDirective, TestHostComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    directive = el.query(By.directive(DebounceClickDirective)).injector.get(DebounceClickDirective);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should call callback', fakeAsync(() => {
    spyOn(component, 'onClick');

    for (let i = 0; i < 3; i++) {
      el.query(By.css('button')).nativeElement.click();
    }

    tick(500);
    expect(component.onClick).toHaveBeenCalledTimes(1);
  }));
});
