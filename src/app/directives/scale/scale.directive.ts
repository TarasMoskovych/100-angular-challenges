import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScale]'
})
export class ScaleDirective {
  @HostListener('mouseover')
  onMouseOver() {
    this.styles.forEach((style: { name: string, value: string }) => {
      this.renderer.setStyle(this.elementRef.nativeElement, style.name, style.value);
    });
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.renderer.removeStyle(this.elementRef.nativeElement, 'transform');
  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  private styles = [
    {
      name: 'transition',
      value: 'transform .3s',
    },
    {
      name: 'transform',
      value: 'scale(1.25)',
    },
    {
      name: 'will-change',
      value: 'transform',
    },
  ];
}
