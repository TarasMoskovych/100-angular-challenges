import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DebounceKeyupDirective } from './debounce-keyup.directive';

@Component({
  template: `<input appDebounceKeyup (debouncedEvent)="onKeyup()">`
})
class TestHostComponent {
  onKeyup(): void {}
}

describe('DebounceKeyupDirective', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let directive: DebounceKeyupDirective;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DebounceKeyupDirective, TestHostComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    directive = el.query(By.directive(DebounceKeyupDirective)).injector.get(DebounceKeyupDirective);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should call callback', fakeAsync(() => {
    const input = el.query(By.css('input')).nativeElement;

    jest.spyOn(component, 'onKeyup');
    input.value = 'test';
    input.dispatchEvent(new CustomEvent('keyup'));

    tick(500);
    expect(component.onKeyup).toHaveBeenCalledTimes(1);
  }));
});

