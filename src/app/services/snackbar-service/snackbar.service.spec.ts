import { DOCUMENT } from '@angular/common';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { SnackbarService } from './snackbar.service';

describe('SnackbarService', () => {
  let service: SnackbarService;
  let ngDocument: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    ngDocument = TestBed.inject(DOCUMENT);
    service = TestBed.inject(SnackbarService);
  });

  const getSnackbarEl = () => ngDocument.body.querySelector('app-snackbar');

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create container and dynamically append Snackbar component', () => {
    service.show();
    expect(getSnackbarEl()).toBeTruthy();
  });

  it('should have single wrapper container', () => {
    service.show();
    service.show();
    service.show();

    expect(ngDocument.body.querySelectorAll(`.${service['wrapperSelector']}`).length).toBe(1);
  });

  it('should destroy the component on "afterClosed"', fakeAsync(() => {
    const instance = service.show();

    spyOn(service['appRef'], 'detachView');
    instance.afterClosed.emit();
    tick(500);

    expect(service['appRef'].detachView).toHaveBeenCalled();
  }));
});
