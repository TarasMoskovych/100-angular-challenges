import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { SnackbarComponent } from 'src/app/shared/components';
import { SnackbarService } from './snackbar.service';

describe('SnackbarService', () => {
  let service: SnackbarService;
  let ngDocument: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnackbarComponent],
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [SnackbarComponent],
      },
    });

    ngDocument = TestBed.inject(DOCUMENT);
    service = TestBed.inject(SnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeFalsy();
  });
});
