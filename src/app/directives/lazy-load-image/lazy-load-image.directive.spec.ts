import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { fakeAsync, tick } from '@angular/core/testing';

import { LazyLoadImageDirective } from './lazy-load-image.directive';

describe('LazyLoadImageDirective', () => {
  const cdrSpy: jasmine.SpyObj<ChangeDetectorRef> = jasmine.createSpyObj('ChangeDetector', ['markForCheck']);
  const src: string = 'assets/img/img1.jpg';
  let directive: LazyLoadImageDirective;

  it('should create an instance', () => {
    expect(new LazyLoadImageDirective({} as Window, { nativeElement: null } as ElementRef, cdrSpy)).toBeTruthy();
  });

  describe('without observer', () => {
    beforeAll(() => {
      directive = new LazyLoadImageDirective({} as Window, { nativeElement: null } as ElementRef, cdrSpy);
      directive.src = src;
    });

    it('should load img when observer is not defined', () => {
      directive.ngAfterViewInit();
      expect(directive.srcAttr).toBe(src);
    });

    it('should trigger change detection', () => {
      directive.ngAfterViewInit();
      expect(cdrSpy.markForCheck).toHaveBeenCalled();
    });

    it('should be successfully destroyed', () => {
      directive.ngOnDestroy();
      expect(directive['observer']).toBeUndefined();
    });
  });

  describe('with observer', () => {
    beforeAll(() => {
      class IntersectionObserver {
        constructor(cb: Function) {
          setTimeout(() => cb(this.entries));
        }
        entries = [{ isIntersecting: false }, { isIntersecting: true }];
        observe() {}
        unobserve() {}
        disconnect() {}
      }

      directive = new LazyLoadImageDirective(window, { nativeElement: null } as ElementRef, cdrSpy);
      directive.src = src;
      window.IntersectionObserver = IntersectionObserver as any;
    });

    it('should lazy load img', fakeAsync(() => {
      directive.ngAfterViewInit();

      tick();
      expect(directive.srcAttr).toBe(src);
    }));

    it('should trigger change detection', () => {
      directive.ngAfterViewInit();
      expect(cdrSpy.markForCheck).toHaveBeenCalled();
    });

    it('should be successfully destroyed', () => {
      directive.ngOnDestroy();
      expect(directive['observer']).toBeDefined();
    });
  });
});
