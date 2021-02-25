import { ViewportScroller } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopOfPageComponent {
  @Input() offset = 100;
  @HostListener('window:scroll')
  onWindowScroll() {
    this.toggleVisibility();
  }

  visible = false;

  constructor(private viewportScroller: ViewportScroller) { }

  onScrollToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  private toggleVisibility(): void {
    this.visible = this.offset <= this.viewportScroller.getScrollPosition()[1];
  }
}
