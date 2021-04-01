import { ElementRef } from '@angular/core';
import { fakeAsync, tick } from '@angular/core/testing';

import { LazyLoadImageDirective } from './lazy-load-image.directive';

describe('LazyLoadImageDirective', () => {
  const cdrSpy = { markForCheck: jest.fn() } as any;
  const src = 'assets/img/img1.jpg';
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
      directive.ngAfterViewInit();
      directive.ngOnDestroy();
      // tslint:disable-next-line
      expect(directive['observer']).toBeUndefined();
    });
  });

  describe('with observer', () => {
    beforeAll(() => {
      class IntersectionObserver {
        constructor(cb: (entries: any) => void) {
          setTimeout(() => cb(this.entries));
        }
        entries = [{ isIntersecting: false }, { isIntersecting: true }];
        observe(): void {}
        unobserve(): void {}
        disconnect(): void {}
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

    it('should trigger change detection', fakeAsync(() => {
      directive.ngAfterViewInit();

      tick();
      expect(cdrSpy.markForCheck).toHaveBeenCalled();
    }));

    it('should be successfully destroyed', () => {
      directive.ngAfterViewInit();
      directive.ngOnDestroy();
      // tslint:disable-next-line
      expect(directive['observer']).toBeDefined();
    });
  });
});
