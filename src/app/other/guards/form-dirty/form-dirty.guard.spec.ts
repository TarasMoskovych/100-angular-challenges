import { TestBed } from '@angular/core/testing';

import { FormDirtyGuard } from './form-dirty.guard';

describe('FormDirtyGuard', () => {
  let guard: FormDirtyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FormDirtyGuard);

    spyOn(window, 'confirm');
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should resolve', () => {
    expect(guard.canDeactivate({ formComponent: { form: {} } })).toBeTrue();
    expect(window.confirm).not.toHaveBeenCalled();
  });

  it('should open dialog', () => {
    guard.canDeactivate({ formComponent: { form: { dirty: true } } });
    expect(window.confirm).toHaveBeenCalled();
  });
});
