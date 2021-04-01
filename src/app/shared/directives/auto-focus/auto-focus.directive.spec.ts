import { fakeAsync, tick } from '@angular/core/testing';

import { AutoFocusDirective } from './auto-focus.directive';

describe('AutoFocusDirective', () => {
  const elementRefSpy = { nativeElement: { focus: jest.fn() } };
  let directive: AutoFocusDirective;

  beforeAll(() => {
    directive = new AutoFocusDirective(elementRefSpy);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should call "focus" on ngAfterContentInit', fakeAsync(() => {
    directive.ngAfterContentInit();
    tick(250);

    expect(elementRefSpy.nativeElement.focus).toHaveBeenCalled();
  }));
});
