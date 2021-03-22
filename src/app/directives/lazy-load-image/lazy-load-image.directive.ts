import { AfterViewInit, ChangeDetectorRef, Directive, ElementRef, HostBinding, Inject, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: 'img[appLazyLoadImage]'
})
export class LazyLoadImageDirective implements AfterViewInit, OnDestroy {
  @Input('src') src: string;
  @HostBinding('attr.src') srcAttr: string;

  private observer: IntersectionObserver;

  constructor(
    @Inject('Window') private window: Window,
    private el: ElementRef,
    private cdr: ChangeDetectorRef,
  ) { }

  ngAfterViewInit(): void {
    this[this.canLazyLoad() ? 'lazyLoadImage' : 'loadImage']();
  }

  ngOnDestroy(): void {
    this.observer && this.observer.disconnect();
  }

  private canLazyLoad(): boolean {
    return this.window && 'IntersectionObserver' in this.window;
  }

  private lazyLoadImage(): void {
    this.observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach(({ isIntersecting }: IntersectionObserverEntry) => {
        if (isIntersecting) {
          this.loadImage();
          this.observer.unobserve(this.el.nativeElement);
        }
      });
    });

    this.observer.observe(this.el.nativeElement);
  }

  private loadImage(): void {
    this.srcAttr = this.src;
    this.cdr.markForCheck();
  }
}
